# Indonesia — References

## Open-source repositories

| Repository | License | Stars | What we extracted |
|---|---|---|---|
| [steevenz/id-payroll-calculator](https://github.com/steevenz/id-payroll-calculator) | MIT | 21 | PTKP amounts, BPJS Kesehatan rates (4%/1%), JHT (3.7%/2%), JP (2%/1%), JKK risk-grade table, JKM (0.3%), biaya jabatan (5% cap 500k/month), NPWP surcharge (20%), payroll calculation methods (NETT/GROSS/GROSS-UP) |
| [KejawenLab/PPH21](https://github.com/KejawenLab/PPH21) | MIT | 6 | PPh 21 progressive bracket structure and strategy-pattern calculation logic |

## Official sources

| Source | URL | What we verified |
|---|---|---|
| Direktorat Jenderal Pajak (DJP) | https://www.pajak.go.id | PPh 21 progressive brackets per UU HPP No. 7/2021 |
| PP 58/2023 | https://peraturan.bpk.go.id/Details/266564/pp-no-58-tahun-2023 | TER (Tarif Efektif Rata-rata) categories and rate tables |
| PMK 168/2023 | https://jdih.kemenkeu.go.id | TER implementation rules for monthly withholding |
| BPJS Ketenagakerjaan | https://www.bpjsketenagakerjaan.go.id | JP wage ceiling IDR 10,547,400 (March 2025), JKP program details |
| BPJS Kesehatan | https://www.bpjs-kesehatan.go.id | Health insurance contribution rates and wage cap IDR 12,000,000 |

## Notes

- The `steevenz/id-payroll-calculator` repo uses pre-HPP tax brackets (first bracket 0–50M, no 35% bracket). The skill file uses the current UU HPP brackets (first bracket 0–60M, includes 35% bracket above 5B).
- The JP wage ceiling in the repo code (IDR 7,000,000) is outdated. The skill file uses the 2025 ceiling of IDR 10,547,400.
- TER tables were sourced from PP 58/2023 Annex as published on official DJP and tax portal sites, not from the repos (which predate the TER scheme).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. Every taxpayer's situation is
different, and the rules in the skill may not match your specific facts.

To speak with one of the licensed accountants who verifies skills for your
jurisdiction — **no liability on either side until you and the accountant sign
a formal engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

We'll route you to the named verifier covering your country or state. You can
also see the full list of verified accountants at
[openaccountants.com/network](https://www.openaccountants.com/network).

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
