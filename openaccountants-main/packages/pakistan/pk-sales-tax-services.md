---
name: pk-sales-tax-services
version: 1.0
jurisdiction: PK
tax_year: 2025-26
category: international
verified_by: pending
triggers:
  - "Pakistan provincial sales tax services"
  - "SRB"
  - "PRA"
  - "KPRA"
  - "BRA"
  - "ICT-IRS Islamabad"
  - "freelance services sales tax Pakistan"
  - "13% services tax Sindh"
always_read: true
---

# Pakistan — Provincial Sales Tax on Services — Skill v1.0

ALWAYS READ THIS SKILL IN FULL before touching any Pakistan provincial sales tax on services work. Sales tax on services in Pakistan is NOT a single federal regime — it is administered by five separate revenue authorities under five separate statutes, each with its own portal, rate, return form, due date, and penalty regime. Federal FBR sales tax (Sales Tax Act 1990) covers GOODS only; services are provincial. Confusing the two is the single most common error.

---

## 1. Quick Reference Table

| Authority | Jurisdiction | Statute | Standard Rate | Portal | Return Due |
|-----------|--------------|---------|---------------|--------|------------|
| **SRB** (Sindh Revenue Board) | Sindh | Sindh Sales Tax on Services Act 2011 | **13%** | e-SRB (e.srb.gos.pk) | 15th of following month (payment); 18th (return) |
| **PRA** (Punjab Revenue Authority) | Punjab | Punjab Sales Tax on Services Act 2012 | **16%** | e-PRA (e.pra.punjab.gov.pk) | 15th (payment); 18th (return) |
| **KPRA** (KP Revenue Authority) | Khyber Pakhtunkhwa | KP Finance Act 2013, Chapter VI | **15%** | e-KPRA (kpra.kp.gov.pk) | 15th (payment); 18th (return) |
| **BRA** (Balochistan Revenue Authority) | Balochistan | Balochistan Sales Tax on Services Act 2015 | **15%** | e-BRA (bra.gob.pk) | 15th (payment); 18th (return) |
| **ICT-IRS** (FBR) | Islamabad Capital Territory | Islamabad Capital Territory (Tax on Services) Ordinance 2001 | **16%** | FBR IRIS (iris.fbr.gov.pk) | 15th (payment); 18th (return) |

> Special reduced rates exist within each regime (e.g. 5%, 8% for IT services in some PRAs subject to conditions). Always check the relevant Second Schedule of the governing Act for the year of supply.

---

## 2. Required Inputs + Refusal Catalogue

### 2.1 Required Inputs Before Computing Any Pakistan Services Tax

1. **Place of business / permanent establishment (PE)** — which province(s) does the service provider have a PE in?
2. **Place of supply / place of consumption** — where is the recipient located? Where is the service performed?
3. **Nature of service** — software development, IT-enabled services (ITeS), consulting, marketing, etc. (each authority's Second Schedule has its own classification codes).
4. **PSEB registration status** — Pakistan Software Export Board registration unlocks export exemption for IT/ITeS services.
5. **Annual turnover** — registration is generally mandatory regardless of turnover for taxable service providers, but small-supplier thresholds may apply in some PRAs.
6. **Existing registrations** — NTN (National Tax Number), STRN (Sales Tax Registration Number), and any provincial registration numbers.
7. **Client jurisdiction breakdown** — invoice-by-invoice province of recipient.
8. **Foreign-currency receipts via banking channel** — required for export exemption.

### 2.2 Refusal Catalogue

DO NOT proceed with the following — escalate to a Pakistan-licensed tax practitioner:

- **Refund claims** under any provincial Act (complex documentary evidence; authority-specific procedures).
- **Cross-province apportionment disputes** where two or more PRAs have issued show-cause notices for the same supply.
- **Withholding agent obligations** under any PRA's Withholding Rules where the client is a government department or large taxpayer.
- **Reverse-charge / self-billing** scenarios on imported services where the recipient is in Pakistan.
- **Anti-money-laundering / suspicious transaction reporting** triggered by sales tax inquiries.
- **Audit defence and tribunal appeals** before the Appellate Tribunals of each PRA.
- **Sales tax on goods** (federal FBR) — that is the Sales Tax Act 1990 regime, not in scope here.
- **Federal Excise Duty on services** (rare residual cases under FED Act 2005) — out of scope.
- **Capital value tax, infrastructure development cess, professional tax** — different regimes.

---

## 3. Tier 1 — Per-Province Detail

### 3.1 SRB — Sindh

- **Statute:** Sindh Sales Tax on Services Act 2011.
- **Standard rate:** 13% (general); reduced rates apply per Second Schedule.
- **IT / IT-enabled services:** Generally taxable at standard rate UNLESS exported. Some categories enjoy reduced rates (e.g. call centres historically at 3% — verify current Schedule).
- **Registration threshold:** No general turnover threshold for taxable service providers — registration is mandatory upon commencement of taxable supplies.
- **Filing frequency:** Monthly.
- **Return form:** SST-03 via e-SRB portal.
- **Payment:** PSID generation on e-SRB → pay through any designated bank or ADC channel.
- **Late filing penalty:** PKR 10,000 minimum + further amount per day under §43; default surcharge under §44 (KIBOR + 3% per annum).
- **Notable services subject to SST:** software/IT services, telecommunication, advertising, courier, banking, insurance, franchise, consulting, contractual execution of work.

### 3.2 PRA — Punjab

- **Statute:** Punjab Sales Tax on Services Act 2012.
- **Standard rate:** 16% (general); reduced rates per Second Schedule (e.g. certain IT services historically 5% subject to conditions — verify current Schedule).
- **IT / IT-enabled services:** Reduced rate available where conditions are met (no input tax adjustment, services rendered to local clients in specified categories).
- **Registration threshold:** Mandatory for taxable service providers; no general turnover threshold.
- **Filing frequency:** Monthly.
- **Return form:** PST return via e-PRA portal.
- **Payment:** PSID via e-PRA → bank or 1Bill / ADC.
- **Late filing penalty:** PKR 10,000 minimum under §48; default surcharge under §49 (KIBOR + 3%).
- **Notable services:** advertising, IT services, construction, franchise, courier, freight forwarding, professional consultancy.

### 3.3 KPRA — Khyber Pakhtunkhwa

- **Statute:** KP Finance Act 2013, Chapter VI; Khyber Pakhtunkhwa Sales Tax on Services Regulation 2022 (operative regulations).
- **Standard rate:** 15%.
- **IT / IT-enabled services:** Some reduced rates per Schedule; verify current notification.
- **Registration:** Mandatory upon commencement of taxable supply.
- **Filing frequency:** Monthly.
- **Return form:** Filed via e-KPRA portal.
- **Late filing penalty:** Per KPRA penalty schedule — PKR 5,000 to 10,000 minimum plus daily amount; default surcharge at prescribed rate.
- **Notable services:** restaurants, hotels, telecommunication, advertising, construction services, professional services.

### 3.4 BRA — Balochistan

- **Statute:** Balochistan Sales Tax on Services Act 2015.
- **Standard rate:** 15%.
- **Registration:** Mandatory for taxable service providers in Balochistan.
- **Filing frequency:** Monthly.
- **Return form:** BST-03 via e-BRA portal.
- **Late filing penalty:** Per Chapter VIII of the Act — minimum PKR 10,000 + default surcharge.
- **Notable services:** telecommunication, advertising, banking, construction, professional services, hotels, restaurants, IT services.

### 3.5 ICT-IRS — Islamabad Capital Territory

- **Statute:** Islamabad Capital Territory (Tax on Services) Ordinance 2001 — administered by FBR (NOT a separate provincial authority; sits within Inland Revenue Service of FBR).
- **Standard rate:** 16% (aligned with the Sales Tax Act 1990 rate by reference).
- **Registration:** Via FBR IRIS — same STRN as federal sales tax registration; service provider declares ICT services on the monthly federal sales tax return.
- **Filing frequency:** Monthly.
- **Return form:** Federal Sales Tax Return on IRIS — services section.
- **Late filing penalty:** Per Sales Tax Act 1990 §33 (applied by reference).
- **Notable services:** services rendered, provided, initiated, received, or consumed within ICT — same Second Schedule classifications as adopted from FBR notifications.

---

## 4. Tier 2 — Cross-Province, Digital Services, Exemptions

### 4.1 Cross-Province Services — Which PRA Has Jurisdiction?

Each PRA's Act contains its own "place of supply" rules. Common principles:

- **Service rendered in Province X to a recipient in Province X** → that province's PRA has unambiguous jurisdiction.
- **Service rendered in Province X to a recipient in Province Y** → BOTH provinces may claim jurisdiction. In practice:
  - The service-origin PRA usually asserts primary right (place where the service is initiated).
  - The destination PRA may also issue notices (place where the service is consumed).
  - **Inter-provincial agreements / MOUs** between SRB, PRA, KPRA, BRA, and FBR aim to reduce double taxation but disputes persist.
- **Service rendered remotely (online) by a Province X provider to a Province Y recipient** → generally treated as supplied at the place of business of the recipient if B2B, or at provider's PE if B2C. Verify against the specific PRA's place-of-supply rule.

**Conservative default:** If the supplier has a PE only in Province X and bills a Province Y client for remotely-delivered services, register and remit in Province X. Maintain documentation evidencing place of rendering. If any PRA issues a notice, do not concede — request the matter be referred to the inter-provincial committee.

### 4.2 Digital / Cross-Border Services

- **Exports of services (IT/ITeS) with PSEB registration and foreign-currency receipts via banking channel:** Exempt or zero-rated under most PRAs (SRB, PRA, KPRA) for IT and IT-enabled services, subject to specific Schedule conditions (e.g. no input adjustment, formal export declaration, encashment certificate from bank).
- **Inbound digital services from foreign suppliers to Pakistani recipients:** Reverse-charge mechanisms exist under some PRAs (notably SRB) — the Pakistani recipient may be required to withhold and pay PST. Verify before advising.
- **Marketplace facilitator rules:** Limited and evolving; not yet uniform across PRAs.

### 4.3 Common Exemptions

- **Exported IT/ITeS services** (PSEB-registered; foreign-currency receipt via banking channel; encashment certificate) — exempt/zero-rated under SRB, PRA, KPRA.
- **Services rendered to diplomatic missions and certain international organizations** — exempt under each Act's Schedule.
- **Educational services** (recognized institutions) — exempt under most Schedules.
- **Healthcare services** — generally exempt except cosmetic/aesthetic.
- **Government-to-government services** — exempt by notification.

> Exemption is NOT automatic — service provider must maintain documentary evidence (invoices marked "exempt," PSEB certificate, banking encashment certificate, recipient's exemption certificate).

---

## 5. Worked Example

**Facts:**
- Ali is a freelance software developer.
- PE: Karachi (Sindh) — sole proprietorship, home office.
- Clients:
  - Client A: Karachi-based fintech (Sindh) — PKR 800,000/month for development services.
  - Client B: Lahore-based marketing agency (Punjab) — PKR 400,000/month for development services.
  - Client C: US-based SaaS company — USD 5,000/month received via banking channel into Ali's bank account in Karachi; Ali holds PSEB registration.
- Ali is NOT registered with any PRA yet.

**Analysis:**

1. **Federal:** Ali must hold NTN (FBR) for income tax. Services are NOT federally taxable as sales tax (federal sales tax = goods only).

2. **SRB (Sindh):**
   - Client A: service rendered from Sindh PE to Sindh recipient → unambiguous SRB jurisdiction. Taxable at 13% standard rate UNLESS the specific software development category qualifies for a reduced rate under the current Sindh Second Schedule (verify).
   - Client C: service rendered from Sindh PE to foreign recipient with PSEB registration and foreign-currency receipt via banking channel → exempt/zero-rated. Encashment certificate required.
   - **Registration:** Ali must register with SRB on commencement of taxable supplies (Client A).

3. **PRA (Punjab):**
   - Client B: service rendered from Sindh PE to Punjab recipient → JURISDICTIONAL OVERLAP.
     - SRB position (origin): taxable in Sindh.
     - PRA position (destination): potentially taxable in Punjab.
   - **Conservative default:** Register only in SRB; charge SRB rate on Client B invoices; document place of rendering (Sindh). Be prepared to defend if PRA issues a notice. If risk of PRA notice is high (Client B is a withholding agent under Punjab rules), seek pre-clearance under the inter-provincial MOU or consider voluntary PRA registration as a precaution — but this is a judgment call requiring practitioner sign-off.

4. **Filing:**
   - Monthly SRB return (SST-03 via e-SRB) showing:
     - Taxable supplies to Client A: PKR 800,000 × 13% = PKR 104,000 output tax.
     - Taxable supplies to Client B: PKR 400,000 × 13% = PKR 52,000 output tax (treated as Sindh-originated).
     - Exempt exports to Client C: USD 5,000 declared as exempt; PSEB certificate and banking encashment certificate held on file.
   - Payment by 15th, return by 18th of following month.

5. **Self-check:**
   - PSEB certificate valid and current? ✓
   - Foreign-currency receipt via banking channel for Client C (not cash, not crypto)? ✓
   - Place-of-rendering documentation for Client B (timesheets, IP logs showing work performed in Sindh)? ✓
   - Invoice template includes SRB registration number, taxable value, tax amount separately? ✓

---

## 6. Filing & Payment Per Authority

| Authority | Portal | Return Form | Payment Due | Return Due | Payment Mechanism |
|-----------|--------|-------------|-------------|------------|--------------------|
| SRB | e.srb.gos.pk | SST-03 | 15th | 18th | PSID → designated bank / ADC |
| PRA | e.pra.punjab.gov.pk | PST return | 15th | 18th | PSID → bank / 1Bill / ADC |
| KPRA | kpra.kp.gov.pk | KP sales tax return | 15th | 18th | PSID → bank / ADC |
| BRA | bra.gob.pk | BST-03 | 15th | 18th | PSID → bank / ADC |
| ICT-IRS | iris.fbr.gov.pk | Federal Sales Tax Return (services section) | 15th | 18th | PSID via IRIS → bank / ADC |

**Documentation to retain (minimum 6 years):**
- Invoices (with registration number, taxable value, tax amount).
- Receipt vouchers / banking encashment certificates.
- PSEB certificate (for exports).
- Working papers reconciling return to books.
- Withholding tax certificates received (where applicable).

---

## 7. Conservative Defaults

When facts are ambiguous, default conservatively:

1. **Default to registration** — if any taxable supply is made in a province, register. The cost of late registration penalties exceeds the cost of early registration.
2. **Default to standard rate** — do not apply a reduced-rate or exempt classification without explicit Schedule evidence and confirmation of all conditions.
3. **Default to origin-province in cross-province disputes** — register and remit in the PE province; document place of rendering meticulously.
4. **Default to TAXABLE on exports without PSEB** — only treat as exempt if PSEB registration is current AND foreign-currency receipt via banking channel is documented.
5. **Default to monthly filing** — there is no quarterly/annual option in any PRA's standard regime.
6. **Default to separate invoice line for tax** — never embed tax in the gross amount; show taxable value and tax amount distinctly.
7. **Default to in-province bank account** for receipts where possible — strengthens place-of-rendering position.
8. **Default to escalating to a Pakistan-licensed practitioner** for any matter touching: refunds, cross-province disputes, withholding obligations, inbound reverse charge, audits, appeals.

---

## 8. Sources

- **Sindh Sales Tax on Services Act 2011** (with subsequent amendments through Sindh Finance Acts).
- **Punjab Sales Tax on Services Act 2012** (with subsequent amendments through Punjab Finance Acts).
- **Khyber Pakhtunkhwa Finance Act 2013** Chapter VI; KP Sales Tax on Services Regulation 2022.
- **Balochistan Sales Tax on Services Act 2015** (with subsequent Balochistan Finance Acts).
- **Islamabad Capital Territory (Tax on Services) Ordinance 2001.**
- **Sales Tax Act 1990** (federal — goods only; referenced for ICT cross-application and penalty provisions).
- SRB portal: e.srb.gos.pk
- PRA portal: e.pra.punjab.gov.pk
- KPRA portal: kpra.kp.gov.pk
- BRA portal: bra.gob.pk
- FBR IRIS: iris.fbr.gov.pk
- Pakistan Software Export Board (PSEB): pseb.org.pk

> **Citation discipline:** Each provincial Act has been amended multiple times by successive Finance Acts. Always cite the section number AND the year of the Finance Act version in force on the date of the relevant supply. Rates and Schedules in this skill reflect the position as of tax year 2025-26 and must be re-verified against the current Schedule before any filing.

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
