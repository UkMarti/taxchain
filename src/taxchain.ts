import axios from 'axios';
import { publishObservation } from './sse-observations';

const SAT_TO_BTC      = 1e-8;
const CACHE_TTL       = 300_000;
const PRICE_CACHE_TTL = 86_400_000;

const _priceCache = new Map<string, number>();
const _txCache    = new Map<string, { data: any; expiresAt: number }>();
const _currentPriceCache = new Map<string, { price: number; expiresAt: number }>();

function getTaxYearBounds(year: number, jurisdiction: string): { start: Date; end: Date } {
  if (jurisdiction === 'uk') {
    return {
      start: new Date(`${year}-04-06T00:00:00Z`),
      end:   new Date(`${year + 1}-04-05T23:59:59Z`),
    };
  }
  return {
    start: new Date(`${year}-01-01T00:00:00Z`),
    end:   new Date(`${year}-12-31T23:59:59Z`),
  };
}

function currentTaxYear(jurisdiction: string): number {
  const now   = new Date();
  const month = now.getUTCMonth() + 1;
  const day   = now.getUTCDate();
  if (jurisdiction === 'uk') {
    return (month > 4 || (month === 4 && day >= 6)) ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
  }
  return now.getUTCFullYear();
}

async function getCurrentPrice(symbol: string): Promise<number> {
  const cached = _currentPriceCache.get(symbol);
  if (cached && Date.now() < cached.expiresAt) return cached.price;
  try {
    const idMap: Record<string, string> = { BTC: 'bitcoin', ETH: 'ethereum', SOL: 'solana' };
    const { data }: any = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idMap[symbol] || 'bitcoin'}&vs_currencies=usd`,
      { timeout: 6000 }
    );
    const price = data?.[idMap[symbol] || 'bitcoin']?.usd ?? 0;
    _currentPriceCache.set(symbol, { price, expiresAt: Date.now() + 60_000 });
    return price;
  } catch { return 0; }
}

async function getHistoricalPrice(symbol: string, timestamp: number, fallbackPrice: number): Promise<{ price: number; source: string }> {
  const date    = new Date(timestamp * 1000);
  const dd      = String(date.getUTCDate()).padStart(2, '0');
  const mm      = String(date.getUTCMonth() + 1).padStart(2, '0');
  const yyyy    = date.getUTCFullYear();
  const dateStr = `${dd}-${mm}-${yyyy}`;
  const key     = `${symbol}:${dateStr}`;

  if (_priceCache.has(key)) return { price: _priceCache.get(key)!, source: 'cache' };

  const idMap: Record<string, string> = { BTC: 'bitcoin', ETH: 'ethereum', SOL: 'solana' };
  const coinId = idMap[symbol.toUpperCase()];
  if (!coinId) return { price: fallbackPrice, source: 'fallback' };

  try {
    const { data }: any = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${dateStr}&localization=false`,
      { timeout: 8000 }
    );
    const price = data?.market_data?.current_price?.usd ?? 0;
    if (price > 0) {
      _priceCache.set(key, price);
      return { price, source: 'coingecko' };
    }
    // CoinGecko returned 0 — use fallback
    _priceCache.set(key, fallbackPrice);
    return { price: fallbackPrice, source: 'fallback_rate_limited' };
  } catch {
    return { price: fallbackPrice, source: 'fallback_error' };
  }
}

async function fetchAllTransactions(address: string): Promise<any[]> {
  const cached = _txCache.get(address);
  if (cached && Date.now() < cached.expiresAt) return cached.data;

  const allTxs: any[] = [];
  let lastTxid: string | null = null;

  while (true) {
    try {
      const url: string = lastTxid
        ? `https://mempool.space/api/address/${address}/txs/chain/${lastTxid}`
        : `https://mempool.space/api/address/${address}/txs`;
      const { data }: any = await axios.get(url, { timeout: 10000 });
      if (!data || data.length === 0) break;
      allTxs.push(...data);
      if (data.length < 25) break;
      lastTxid = data[data.length - 1].txid;
      await new Promise(r => setTimeout(r, 300));
    } catch { break; }
  }

  _txCache.set(address, { data: allTxs, expiresAt: Date.now() + CACHE_TTL });
  return allTxs;
}

function parseWalletFlows(txs: any[], address: string) {
  return txs
    .filter(tx => tx.status?.confirmed && tx.status?.block_time)
    .map(tx => {
      const received = tx.vout
        .filter((o: any) => o.scriptpubkey_address === address)
        .reduce((s: number, o: any) => s + o.value, 0);
      const sent = tx.vin
        .filter((i: any) => i.prevout?.scriptpubkey_address === address)
        .reduce((s: number, i: any) => s + i.prevout.value, 0);
      const net     = received - sent;
      const fee_sat = tx.fee || 0;
      return {
        txid:         tx.txid,
        timestamp:    tx.status.block_time,
        type:         net > 0 ? 'receive' : 'send',
        amount_btc:   Math.abs(Math.round(net * SAT_TO_BTC * 1e8)) / 1e8,
        fee_btc:      net < 0 ? Math.round(fee_sat * SAT_TO_BTC * 1e8) / 1e8 : 0,
        block_height: tx.status.block_height,
      };
    })
    .filter(tx => tx.amount_btc > 0)
    .sort((a, b) => a.timestamp - b.timestamp);
}

async function enrichWithPrices(flows: ReturnType<typeof parseWalletFlows>, symbol: string, currentPrice: number) {
  const enriched = [];
  for (const flow of flows) {
    const { price, source } = await getHistoricalPrice(symbol, flow.timestamp, currentPrice);
    await new Promise(r => setTimeout(r, 120));
    enriched.push({
      ...flow,
      price_usd:    price,
      value_usd:    Math.round(flow.amount_btc * price * 100) / 100,
      price_source: source,
    });
  }
  return enriched;
}

interface Lot {
  acquired:     number;
  amount_btc:   number;
  cost_per_btc: number;
  cost_total:   number;
}

interface DisposalResult {
  txid:          string;
  timestamp:     number;
  date:          string;
  amount_btc:    number;
  proceeds:      number;
  cost_basis:    number;
  gain_loss:     number;
  is_gain:       boolean;
  holding_days:  number;
  long_term:     boolean;
  price_source:  string;
}

function calculateSection104(flows: any[]): { lots: Lot[]; disposals: DisposalResult[] } {
  let poolBtc  = 0;
  let poolCost = 0;
  const disposals: DisposalResult[] = [];

  for (const flow of flows) {
    if (flow.type === 'receive') {
      poolBtc  += flow.amount_btc;
      poolCost += flow.amount_btc * flow.price_usd;
    } else {
      if (poolBtc <= 0) continue;
      const avgCostPerBtc = poolCost / poolBtc;
      const costBasis     = Math.round(flow.amount_btc * avgCostPerBtc * 100) / 100;
      const proceeds      = Math.round(flow.amount_btc * flow.price_usd * 100) / 100;
      const gain_loss     = Math.round((proceeds - costBasis) * 100) / 100;
      poolBtc  -= flow.amount_btc;
      poolCost -= flow.amount_btc * avgCostPerBtc;
      disposals.push({
        txid:         flow.txid,
        timestamp:    flow.timestamp,
        date:         new Date(flow.timestamp * 1000).toISOString().split('T')[0],
        amount_btc:   flow.amount_btc,
        proceeds,
        cost_basis:   costBasis,
        gain_loss,
        is_gain:      gain_loss > 0,
        holding_days: 0,
        long_term:    false,
        price_source: flow.price_source,
      });
    }
  }

  const remainingLot: Lot[] = poolBtc > 0 ? [{
    acquired:     0,
    amount_btc:   poolBtc,
    cost_per_btc: poolBtc > 0 ? poolCost / poolBtc : 0,
    cost_total:   poolCost,
  }] : [];

  return { lots: remainingLot, disposals };
}

function calculateFIFO(flows: any[]): { lots: Lot[]; disposals: DisposalResult[] } {
  const lots: Lot[]                 = [];
  const disposals: DisposalResult[] = [];

  for (const flow of flows) {
    if (flow.type === 'receive') {
      lots.push({
        acquired:     flow.timestamp,
        amount_btc:   flow.amount_btc,
        cost_per_btc: flow.price_usd,
        cost_total:   Math.round(flow.amount_btc * flow.price_usd * 100) / 100,
      });
    } else {
      let remaining = flow.amount_btc;
      let costBasis = 0;
      let firstAcquired = lots.length > 0 ? lots[0].acquired : flow.timestamp;

      while (remaining > 0.00000001 && lots.length > 0) {
        const lot = lots[0];
        if (lot.amount_btc <= remaining) {
          costBasis  += lot.cost_total;
          remaining  -= lot.amount_btc;
          lots.shift();
        } else {
          const portion  = remaining / lot.amount_btc;
          costBasis     += lot.cost_total * portion;
          lot.cost_total   *= (1 - portion);
          lot.amount_btc   -= remaining;
          remaining         = 0;
        }
      }

      const proceeds     = Math.round(flow.amount_btc * flow.price_usd * 100) / 100;
      const gain_loss    = Math.round((proceeds - costBasis) * 100) / 100;
      const holding_days = Math.floor((flow.timestamp - firstAcquired) / 86400);

      disposals.push({
        txid:         flow.txid,
        timestamp:    flow.timestamp,
        date:         new Date(flow.timestamp * 1000).toISOString().split('T')[0],
        amount_btc:   flow.amount_btc,
        proceeds,
        cost_basis:   Math.round(costBasis * 100) / 100,
        gain_loss,
        is_gain:      gain_loss > 0,
        holding_days,
        long_term:    holding_days > 365,
        price_source: flow.price_source,
      });
    }
  }

  return { lots, disposals };
}

function buildSummary(
  disposals:    DisposalResult[],
  lots:         Lot[],
  jurisdiction: string,
  tax_year:     number,
  currentPrice: number,
) {
  const bounds  = getTaxYearBounds(tax_year, jurisdiction);
  const inYear  = disposals.filter(d => {
    const dt = new Date(d.timestamp * 1000);
    return dt >= bounds.start && dt <= bounds.end;
  });

  const totalGains  = inYear.filter(d => d.is_gain).reduce((s, d) => s + d.gain_loss, 0);
  const totalLosses = Math.abs(inYear.filter(d => !d.is_gain).reduce((s, d) => s + d.gain_loss, 0));
  const netGain     = Math.round((totalGains - totalLosses) * 100) / 100;

  const UK_CGT_ALLOWANCE   = 3000;
  const UK_CGT_RATE_HIGHER = 0.24;
  const US_LONG_TERM_RATE  = 0.15;
  const US_SHORT_TERM_RATE = 0.37;

  let estimatedTax        = 0;
  let allowanceRemaining  = 0;

  if (jurisdiction === 'uk') {
    allowanceRemaining = Math.max(0, UK_CGT_ALLOWANCE - netGain);
    const taxableGain  = Math.max(0, netGain - UK_CGT_ALLOWANCE);
    estimatedTax       = Math.round(taxableGain * UK_CGT_RATE_HIGHER * 100) / 100;
  } else {
    const longTermGains  = inYear.filter(d => d.is_gain && d.long_term).reduce((s, d) => s + d.gain_loss, 0);
    const shortTermGains = inYear.filter(d => d.is_gain && !d.long_term).reduce((s, d) => s + d.gain_loss, 0);
    estimatedTax = Math.round((longTermGains * US_LONG_TERM_RATE + shortTermGains * US_SHORT_TERM_RATE) * 100) / 100;
  }

  const unrealisedGains  = lots.reduce((s, lot) => {
    const diff = lot.amount_btc * currentPrice - lot.cost_total;
    return diff > 0 ? s + diff : s;
  }, 0);

  const unrealisedLosses = lots.reduce((s, lot) => {
    const diff = lot.amount_btc * currentPrice - lot.cost_total;
    return diff < 0 ? s + Math.abs(diff) : s;
  }, 0);

  const fallbackCount = inYear.filter(d => d.price_source?.includes('fallback')).length;

  return {
    tax_year,
    jurisdiction:           jurisdiction.toUpperCase(),
    period:                 `${bounds.start.toISOString().split('T')[0]} → ${bounds.end.toISOString().split('T')[0]}`,
    disposals_count:        inYear.length,
    total_gains_usd:        Math.round(totalGains * 100) / 100,
    total_losses_usd:       Math.round(totalLosses * 100) / 100,
    net_gain_usd:           netGain,
    estimated_tax_usd:      Math.max(0, estimatedTax),
    allowance_remaining_usd: allowanceRemaining,
    unrealised_gains_usd:   Math.round(unrealisedGains * 100) / 100,
    unrealised_losses_usd:  Math.round(unrealisedLosses * 100) / 100,
    remaining_holdings_btc: Math.round(lots.reduce((s, l) => s + l.amount_btc, 0) * 1e8) / 1e8,
    price_note:             fallbackCount > 0 ? `${fallbackCount} disposal(s) used current price as fallback — historical API rate limited` : 'All prices from CoinGecko historical data',
    disposals:              inYear,
  };
}

function buildHarvestOpportunities(lots: Lot[], currentPrice: number, netGain: number, jurisdiction: string) {
  const opportunities = lots
    .map(lot => {
      const currentValue = lot.amount_btc * currentPrice;
      const unrealised   = currentValue - lot.cost_total;
      return {
        amount_btc:     Math.round(lot.amount_btc * 1e8) / 1e8,
        cost_per_btc:   Math.round(lot.cost_per_btc * 100) / 100,
        current_price:  currentPrice,
        unrealised_pnl: Math.round(unrealised * 100) / 100,
        is_loss:        unrealised < 0,
        acquired:       lot.acquired > 0 ? new Date(lot.acquired * 1000).toISOString().split('T')[0] : 'pooled',
      };
    })
    .filter(l => l.is_loss)
    .sort((a, b) => a.unrealised_pnl - b.unrealised_pnl);

  const totalHarvestable = Math.abs(opportunities.reduce((s, o) => s + o.unrealised_pnl, 0));
  const taxSaving        = Math.round(
    Math.min(totalHarvestable, Math.max(0, netGain)) *
    (jurisdiction === 'uk' ? 0.24 : 0.37) * 100
  ) / 100;

  return {
    opportunities_count:        opportunities.length,
    total_harvestable_loss_usd: Math.round(totalHarvestable * 100) / 100,
    potential_tax_saving_usd:   taxSaving,
    current_btc_price:          currentPrice,
    lots:                       opportunities,
  };
}

export async function generateTaxReport(
  address:      string,
  symbol:       string  = 'BTC',
  method:       string  = 'fifo',
  jurisdiction: string  = 'uk',
  tax_year?:    number,
) {
  const year         = tax_year || currentTaxYear(jurisdiction);
  const currentPrice = await getCurrentPrice(symbol);

  console.log(`[TaxChain] ${jurisdiction.toUpperCase()} ${year} | ${address.slice(0, 12)}... | ${method.toUpperCase()} | BTC: $${currentPrice.toLocaleString()}`);

  const rawTxs   = await fetchAllTransactions(address);
  console.log(`[TaxChain] ${rawTxs.length} transactions fetched`);

  const flows    = parseWalletFlows(rawTxs, address);
  const enriched = await enrichWithPrices(flows, symbol, currentPrice);

  const { lots, disposals } = method === 'section104' || jurisdiction === 'uk'
    ? calculateSection104(enriched)
    : calculateFIFO(enriched);

  const summary = buildSummary(disposals, lots, jurisdiction, year, currentPrice);
  const harvest = buildHarvestOpportunities(lots, currentPrice, summary.net_gain_usd, jurisdiction);

  console.log(`[TaxChain] ✓ Net gain: $${summary.net_gain_usd} | Tax: $${summary.estimated_tax_usd} | Harvest saving: $${harvest.potential_tax_saving_usd}`);

  return { address, symbol, method: jurisdiction === 'uk' ? 'Section 104 (HMRC)' : method.toUpperCase(), ...summary, harvest, generated_at: new Date().toISOString() };
}

export async function sellTodayPreview(address: string, symbol: string = 'BTC', jurisdiction: string = 'uk') {
  const currentPrice = await getCurrentPrice(symbol);
  const rawTxs       = await fetchAllTransactions(address);
  const flows        = parseWalletFlows(rawTxs, address);
  const enriched     = await enrichWithPrices(flows, symbol, currentPrice);
  const { lots }     = jurisdiction === 'uk' ? calculateSection104(enriched) : calculateFIFO(enriched);

  const totalBtc       = lots.reduce((s, l) => s + l.amount_btc, 0);
  const totalCostBasis = lots.reduce((s, l) => s + l.cost_total, 0);
  const saleProceeds   = totalBtc * currentPrice;
  const gain           = saleProceeds - totalCostBasis;
  const UK_CGT         = 3000;
  const taxableGain    = Math.max(0, gain - (jurisdiction === 'uk' ? UK_CGT : 0));
  const estimatedTax   = Math.round(taxableGain * (jurisdiction === 'uk' ? 0.24 : 0.15) * 100) / 100;

  return {
    address, symbol,
    current_price_usd:  currentPrice,
    holdings_btc:       Math.round(totalBtc * 1e8) / 1e8,
    total_cost_basis:   Math.round(totalCostBasis * 100) / 100,
    sale_proceeds_usd:  Math.round(saleProceeds * 100) / 100,
    gain_if_sold_usd:   Math.round(gain * 100) / 100,
    estimated_tax_usd:  estimatedTax,
    net_after_tax_usd:  Math.round((saleProceeds - estimatedTax) * 100) / 100,
    jurisdiction:       jurisdiction.toUpperCase(),
    timestamp:          Date.now(),
  };
}

export function taxChainRouter() {
  return {
    report: async (req: any, res: any) => {
      try {
        const { address } = req.params;
        const { symbol = 'BTC', method = 'fifo', jurisdiction = 'uk', tax_year } = req.query;
        if (!address) return res.status(400).json({ error: 'address required' });
        const report = await generateTaxReport(address, symbol, method, jurisdiction, tax_year ? parseInt(tax_year) : undefined);
        publishObservation('tax_report_generated', { address: address.slice(0, 12) + '...', jurisdiction, tax_year, net_gain: report.net_gain_usd, disposals: report.disposals_count });
        res.json(report);
      } catch (err: any) {
        console.error('[TaxChain] Error:', err.message);
        res.status(500).json({ error: err.message });
      }
    },
    preview: async (req: any, res: any) => {
      try {
        const { address } = req.params;
        const { symbol = 'BTC', jurisdiction = 'uk' } = req.query;
        res.json(await sellTodayPreview(address, symbol, jurisdiction));
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
// Standalone Server Mount for taxchaincrypto.com
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const taxChain = taxChainRouter();

// Mount the direct endpoints
app.get('/v1/tax/report/:address', taxChain.report);
app.get('/v1/tax/preview/:address', taxChain.preview);

// Health check root
app.get('/', (req, res) => {
    res.json({ status: "TaxChain Standalone Active", domain: "taxchaincrypto.com" });
});

app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`[TaxChain] Standalone Active & Guarded by Cloudflare`);
    console.log(`[TaxChain] Running locally on: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
});
