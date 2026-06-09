import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const CITATIONS = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'citations.json'), 'utf8')
);

export async function generateWorkingPaper(report: any, jurisdiction: string): Promise<<Buffer> {
  const cite = CITATIONS[jurisdiction] || CITATIONS['uk'];
  
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const chunks: Buffer[] = [];
    
    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.fontSize(22).font('Helvetica-Bold').text('TaxChain Crypto', 50, 50);
    doc.fontSize(11).font('Helvetica').fillColor('#666').text('Institutional Crypto Tax Working Paper', 50, 78);
    doc.moveTo(50, 95).lineTo(545, 95).strokeColor('#e2e8f0').lineWidth(1).stroke();

    doc.fillColor('#000').fontSize(13).font('Helvetica-Bold').text('Report Details', 50, 110);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Address: ${report.address}`, 50, 130);
    doc.text(`Jurisdiction: ${report.jurisdiction}`, 50, 145);
    doc.text(`Tax Year: ${report.tax_year}`, 50, 160);
    doc.text(`Period: ${report.period}`, 50, 175);
    doc.text(`Method: ${report.method}`, 50, 190);
    doc.text(`Generated: ${new Date(report.generated_at).toUTCString()}`, 50, 205);
    doc.text(`Report ID: TC-${report.address.slice(0,8)}-${report.tax_year}`, 50, 220);

    doc.rect(50, 240, 495, 130).fillColor('#f8fafc').fill();
    doc.fillColor('#000').fontSize(13).font('Helvetica-Bold').text('Tax Summary', 65, 252);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Total Gains:`, 65, 272).text(`$${report.total_gains_usd.toLocaleString()}`, 300, 272);
    doc.text(`Total Losses:`, 65, 287).text(`$${report.total_losses_usd.toLocaleString()}`, 300, 287);
    doc.font('Helvetica-Bold').text(`Net Gain:`, 65, 302).text(`$${report.net_gain_usd.toLocaleString()}`, 300, 302);
    doc.font('Helvetica').text(`CGT Allowance Remaining:`, 65, 317).text(`$${report.allowance_remaining_usd.toLocaleString()}`, 300, 317);
    doc.fillColor('#dc2626').font('Helvetica-Bold').text(`Estimated Tax Liability:`, 65, 332).text(`$${report.estimated_tax_usd.toLocaleString()}`, 300, 332);

    doc.fillColor('#000').fontSize(13).font('Helvetica-Bold').text('Tax Loss Harvesting', 50, 385);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Opportunities: ${report.harvest.opportunities_count}`, 50, 405);
    doc.text(`Harvestable loss: $${report.harvest.total_harvestable_loss_usd.toLocaleString()}`, 50, 420);
    doc.fillColor('#16a34a').text(`Potential saving: $${report.harvest.potential_tax_saving_usd.toLocaleString()}`, 50, 435);

    doc.fillColor('#000').fontSize(13).font('Helvetica-Bold').text('Unrealised Positions', 50, 465);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Gains: $${report.unrealised_gains_usd.toLocaleString()}`, 50, 485);
    doc.text(`Losses: $${report.unrealised_losses_usd.toLocaleString()}`, 50, 500);
    doc.text(`Holdings: ${report.remaining_holdings_btc} BTC`, 50, 515);

    doc.addPage();
    doc.fontSize(13).font('Helvetica-Bold').fillColor('#000').text('Disposal Detail', 50, 50);
    
    if (!report.disposals || report.disposals.length === 0) {
      doc.fontSize(10).font('Helvetica').fillColor('#666').text('No disposals recorded in this tax year.', 50, 75);
    } else {
      let y = 75;
      doc.fontSize(9).font('Helvetica-Bold').fillColor('#000');
      doc.text('Date', 50, y); doc.text('Amount', 120, y); doc.text('Proceeds', 190, y); doc.text('Cost Basis', 270, y); doc.text('Gain/Loss', 350, y); doc.text('Source', 430, y);
      doc.moveTo(50, y + 15).lineTo(545, y + 15).strokeColor('#e2e8f0').lineWidth(0.5).stroke();
      y += 22;

      doc.font('Helvetica').fontSize(8);
      for (const d of report.disposals.slice(0, 40)) {
        if (y > 720) { doc.addPage(); y = 50; }
        const color = d.gain_loss >= 0 ? '#16a34a' : '#dc2626';
        doc.fillColor('#000').text(d.date, 50, y);
        doc.text(`${d.amount_btc} BTC`, 120, y);
        doc.text(`$${d.proceeds.toLocaleString()}`, 190, y);
        doc.text(`$${d.cost_basis.toLocaleString()}`, 270, y);
        doc.fillColor(color).text(`$${d.gain_loss.toLocaleString()}`, 350, y);
        doc.fillColor('#666').text(d.price_source || 'coingecko', 430, y);
        y += 14;
      }
      if (report.disposals.length > 40) {
        doc.fillColor('#666').text(`... and ${report.disposals.length - 40} more disposals`, 50, y + 5);
      }
    }

    doc.addPage();
    doc.fontSize(13).font('Helvetica-Bold').fillColor('#000').text('Citations & Legal Basis', 50, 50);
    doc.fontSize(9).font('Helvetica').fillColor('#444');
    doc.text(`1. ${cite.method}`, 50, 75, { width: 495 });
    doc.text(`2. ${cite.allowance}`, 50, 95, { width: 495 });
    doc.text(`3. ${cite.rate_higher}`, 50, 110, { width: 495 });
    doc.text(`4. ${cite.price_source}`, 50, 125, { width: 495 });
    doc.text(`5. ${cite.method_detail}`, 50, 145, { width: 495 });

    doc.rect(50, 200, 495, 90).strokeColor('#fbbf24').lineWidth(1).stroke();
    doc.fontSize(10).font('Helvetica-Bold').fillColor('#92400e').text('DISCLAIMER', 65, 215);
    doc.font('Helvetica').fillColor('#000').fontSize(8);
    doc.text(cite.disclaimer, 65, 232, { width: 465 });

    doc.fontSize(12).font('Helvetica-Bold').fillColor('#000').text('Accountant Sign-Off', 50, 320);
    doc.fontSize(9).font('Helvetica').fillColor('#444');
    doc.text(cite.signature_prompt, 50, 340, { width: 495 });
    
    doc.moveTo(50, 390).lineTo(280, 390).strokeColor('#000').lineWidth(0.5).stroke();
    doc.moveTo(320, 390).lineTo(545, 390).stroke();
    doc.fontSize(8).fillColor('#666');
    doc.text('Signature', 50, 395); doc.text('Date', 320, 395);
    
    doc.moveTo(50, 440).lineTo(280, 440).stroke();
    doc.moveTo(320, 440).lineTo(545, 440).stroke();
    doc.text('Name', 50, 445); doc.text('License / Registration Number', 320, 445);

    doc.end();
  });
}