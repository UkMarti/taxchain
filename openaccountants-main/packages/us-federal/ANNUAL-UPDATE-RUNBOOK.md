# US Federal Rates — Annual Update Runbook

Maintainer-facing operational guide. Update once per year in early December.

---

## 1. Why this file exists

Every US federal skill in `us-federal/` and every US-state skill in `us-XX/` carries dozens of indexed dollar amounts: bracket thresholds, standard deduction, FEIE cap, 401(k) deferral, SS wage base, gift exclusion, AMT exemption, §179, depreciation caps, mileage, FBAR, 1099 thresholds. If those numbers live inline in the markdown, one IRS Rev. Proc. release in October triggers ~150 edits across ~80 skills. That is how stale rates leak into production.

The rates.YYYY.json files are the single source of truth for indexed amounts. Skills cite the markdown for the *rule* and *citation*; they pull the *number* from `rates.YYYY.json`. One annual edit refreshes the whole stack.

Rule: **if a number is indexed by the IRS or SSA, it lives in JSON, not in markdown.** Statutory unindexed numbers (NIIT thresholds, additional Medicare thresholds, §6654 minimum penalty floor) may live in either place but should also be mirrored in JSON for consistency.

---

## 2. When to update

The IRS and SSA publish 2026 figures on a staggered calendar. Wait for the cluster, then update once.

| Date (typical)        | Source                                                            |
|-----------------------|-------------------------------------------------------------------|
| Mid-May (prior year)  | Rev. Proc. for HSA/HDHP limits (often available 6+ months early)  |
| Mid-October           | SSA Annual Fact Sheet (next year's OASDI wage base, COLA)         |
| Late October          | Rev. Proc. for general inflation adjustments (Rev. Proc. NN-XX)   |
| Early November        | IRS Notice for retirement plan limits (Notice NN-XX)              |
| Mid-November          | IRS Rev. Rul. for Q1 next-year underpayment interest rate         |
| Mid-December          | IRS Notice for next-year standard mileage rates                   |

**Recommended cadence:** run the update in early December. By then 90%+ of figures are published. Plug in remaining mileage rates and Q1 underpayment rate as soon as available (typically mid-December).

**Do not push partial updates.** If the mileage rate is not yet out on Dec 1, leave the 2025 number in the 2026 file as `null` with `_TODO_mileage` set, and patch it when the IRS publishes.

---

## 3. The 4-step December process

### Step 1 — Copy the current-year JSON to next year

```
cp packages/us-federal/rates.2025.json packages/us-federal/rates.2026.json
```

Replace existing skeleton — the skeleton was authored months ago and structure may have drifted. Start fresh from the most recent populated file.

### Step 2 — Walk each section with source documents open

Open in browser tabs (in this order):

1. Rev. Proc. NN-NN (general inflation adjustments) — work through every line. Brackets, standard deduction, AMT, capital gains, FEIE, FSA, AOTC/LLC phaseouts, adoption credit, kiddie tax, vehicle 280F caps, transfer-tax exclusions.
2. IRS Notice NN-NN (retirement) — 401(k) deferral, catch-ups, 415(c), 401(a)(17), IRA, SEP, SIMPLE, DB §415(b), HCE, key employee, saver credit phaseouts.
3. SSA Annual Fact Sheet — OASDI wage base, self-employed nonfarm optional method max, household employee threshold, SS COLA (background only).
4. Rev. Proc. NN-NN (HSA/HDHP) — usually issued in May the prior year. Six lines.
5. IRS Notice NN-NN (mileage) — three lines (business / medical-moving / charitable).
6. Rev. Rul. for quarterly underpayment interest — quote Q1 rate now; add Q2/Q3/Q4 as they publish.

For each line: open the JSON, replace the value, look at the citation, confirm. Do NOT eyeball-extrapolate from prior-year growth — copy from the document.

### Step 3 — Update metadata

```json
"valid_as_of": "2026-12-08",                   // today's date
"legislative_basis": "OBBBA P.L. 119-21 + ...", // add any 2026 legislation
"source_documents": [
  "Rev. Proc. 2025-XX (annual inflation adjustments for 2026)",
  "IRS Notice 2025-XX (retirement plan limits 2026)",
  "SSA Annual Fact Sheet 2026",
  ...
]
```

Bump `legislative_basis` whenever Congress passes new tax legislation. Bump `source_documents` to the actual published doc numbers, not placeholders.

### Step 4 — Find and refresh every skill that hardcodes a number

Most skills should cite `rates.YYYY.json` and pull live values. But in practice some skills bake numbers inline (especially state skills with their own brackets, and any skill written before the rates-JSON infrastructure existed).

Run this from the repo root before publishing:

```bash
# Find any 2025-stamped reference still living in skill markdown
grep -rn "2025" packages/us-federal/ packages/us-ca/ packages/us-ny/ \
                packages/us-il/ packages/us-ma/ packages/us-nj/ \
                packages/us-mn/ packages/us-nc/ packages/us-ga/ \
                | grep -v rates.2025.json | grep -v rates.2026.json

# Find hardcoded specific 2025 dollar amounts in skills
grep -rn -E '\$?(15,000|30,000|176,100|23,500|7,000|70,000|19,000|13,990,000|130,000|241,950|394,600|483,900|197,300|626,350|751,600)' \
        packages/us-federal/ packages/us-*/
```

Review each hit. Bump the year reference. If the number is also changing (most will), update to 2026 figure. If a number is still inline that should live in JSON, that's a refactor opportunity — extract it now.

Commit message format:

```
Update US federal rates for 2026 (Rev. Proc. 2025-XX)

- All 2026 indexed amounts pulled from official sources
- §250 GILTI deduction drops to 37.5%, FDII to 21.875% (OBBBA)
- BEAT rate rises to 12.5% (OBBBA)
- QBI rate rises to 23% (OBBBA)
- 401(k) deferral $24,500 [confirm with Notice 2025-XX]
- SS wage base $XXX,XXX
```

---

## 4. AUDIT FLASH POINT convention

Tax positions with elevated IRS audit risk get an explicit marker in skill markdown:

```markdown
**AUDIT FLASH POINT — §1402(a)(13) limited-partner SE.** Post-Soroban (TCM 2023-153),
the IRS challenges no-SE positions for LP/LLC members who functionally manage. Default
conservative: treat manager-LPs as subject to SE on management share.
```

Use this marker (literal text `**AUDIT FLASH POINT**`) so reviewers can grep for it and apply heightened scrutiny.

**Canonical flash-point list (keep in sync across skills):**

| Issue                                       | Authority / litigation                                          |
|---------------------------------------------|-----------------------------------------------------------------|
| §174 R&D capitalization & OBBBA transition | OBBBA repeal retro to 2022; transition mechanics still unsettled|
| §1402(a)(13) limited-partner SE             | Soroban Capital Partners (TCM 2023-153); Denham; Sirius         |
| §183 hobby vs business                      | Hobby-loss audits continue; 9-factor §1.183-2(b) analysis       |
| Employee Retention Credit (ERC) clawbacks   | IRS Voluntary Disclosure Program ended; ongoing exam wave       |
| BBA partnership audit regime                | Push-out vs imputed underpayment; AAR mechanics                 |
| §165 worthless-stock losses                 | Year of worthlessness is a fact question; IRS resists late years|
| Late-claimed §41 R&D credits (amended)      | IRS Memo CCM 20214101F documentation requirements remain        |
| §469 real-estate professional               | 750-hour and material-participation logs scrutinized            |
| §280E cannabis                              | All non-COGS deductions disallowed; ongoing controversy         |
| Cryptocurrency basis & 1099-DA              | New 1099-DA reporting starts 2025; wash-sale rules contested    |
| Foreign-information-return penalties (5471/8865/3520) | §6038/§6677 penalties auto-assessed; FBAR willfulness     |

When adding a new flash point, add it here too.

---

## 5. Tax-year-drift checklist

Files that always carry year-stamped content. After updating `rates.YYYY+1.json`, walk this list to bump year references in markdown:

### `us-federal/`
- `us-form-1040-self-employed-positions.md`
- `us-sole-prop-bookkeeping.md`
- `us-schedule-c-and-se-computation.md`
- `us-self-employed-retirement.md`
- `us-self-employed-health-insurance.md`
- `us-quarterly-estimated-tax.md`
- `us-qbi-deduction.md`
- `us-1099-nec-issuance.md`
- `us-federal-return-assembly.md`
- `us-estate-gift-706-709.md`
- `us-foreign-earned-income-2555.md`
- `us-foreign-tax-credit-1116.md`
- `us-form-1065-partnership.md`
- `us-form-1120-c-corp.md`
- `us-form-941-940-payroll.md`
- `us-gilti-fdii-beat.md`
- `us-r-and-d-section-174-and-41.md`
- `us-pte-state-matrix.md`

### State skills with year-stamped brackets / indexed amounts
- `us-ca/` — Form 540, 540-ES, 568, 3853, PTE elective tax, brackets
- `us-ny/` — IT-201 brackets, NYC supplemental, MCTMT, PTET
- `us-il/` — flat-rate confirmation, PTE replacement tax
- `us-ma/` — Form 1, 1-NR/PY, millionaires surtax thresholds, PTE 63D
- `us-nj/` — NJ-1040 brackets (highly graduated), PTE BAIT
- `us-mn/` — M1 brackets, PTE elective tax
- `us-nc/` — D-400 flat rate phasedown schedule, PTE
- `us-ga/` — Form 500 brackets (single rate by 2024), PTE
- (lighter-touch) `us-co/`, `us-or/`, `us-va/`, `us-md/`, `us-wi/`, `us-mi/`, `us-pa/`, `us-oh/`, `us-az/`

### Non-income-tax state skills with annual changes
- `us-ca/california-sales-use-tax.md` — district rate changes
- `us-tx/texas-sales-tax.md` — economic nexus threshold; rate confirmation
- `us-tx/texas-franchise-tax.md` — No-Tax-Due threshold, EZ computation cap

---

## 6. Adding a new indexed amount

Periodically the IRS introduces a new indexed figure (e.g., the OBBBA senior-bonus deduction phaseout, new §199A thresholds, expanded HSA limits). To add it:

### a) Add to `rates.YYYY.json` (current year)

Place under the most logical section. Use snake_case keys. Include a `_note_*` sibling field if the figure has a non-obvious source or interpretation.

```json
"senior_bonus_deduction_phaseout_single": 75000,
"_note_senior_bonus": "OBBBA temporary deduction 2025-2028, age 65+; phases out above $75k single / $150k MFJ AGI"
```

### b) Add to `rates.YYYY+1.json` (skeleton next year)

Mirror the key with `null` and a `_TODO_*` sibling explaining what source to wait for:

```json
"senior_bonus_deduction_phaseout_single": null,
"_TODO_senior_bonus_phaseout": "Wait for Rev. Proc. 2025-XX; OBBBA specifies the dollar threshold is not indexed unless future legislation provides — confirm."
```

### c) Update each skill that cites the figure

Search the codebase, find the markdown that discusses the new figure, and replace any inline value with a JSON reference.

### d) Log in source_documents

If the new figure introduces a new authority (a new Rev. Proc., new Notice, new statute), add it to `source_documents` in both JSON files.

---

## 7. Sanity checks before publishing

Run before committing the December update:

- [ ] `valid_as_of` is today's date in both files
- [ ] `legislative_basis` reflects the most recent enacted law
- [ ] `source_documents` lists actual Rev. Proc. / Notice numbers (no `NN-NN` placeholders)
- [ ] Every value in current-year JSON is a number, not `null`
- [ ] Every `_TODO_*` field in current-year JSON has been removed
- [ ] OASDI wage base, 401(k) deferral, standard deduction, FEIE cap, gift exclusion, estate exclusion are all confirmed against primary source
- [ ] Bracket arrays have correct number of entries per filing status (7 for ordinary, 3 for LTCG)
- [ ] No grep hits on prior-year dollar amounts in markdown skills (Step 4 above)
- [ ] Spot-check three random state skills for year-stamped content
- [ ] AUDIT FLASH POINT markers still present where appropriate
- [ ] Diff reviewed by a second maintainer credentialed under Circular 230

---

## 8. Out-of-cycle updates

Some changes require mid-year patches, not December-only edits:

- **Quarterly underpayment interest rate**: IRS announces ~45 days before each quarter via Rev. Rul. Update `interest_rates_underpayment.qN_YYYY_individual` as published.
- **New legislation enacted mid-year**: e.g., OBBBA in July 2025. Re-run the full process for the affected year; bump `valid_as_of`; add bill to `legislative_basis`.
- **IRS Notice correcting a prior figure**: rare but happens (e.g., catch-up contribution clarifications). Patch and note in `source_documents`.
- **Litigation outcomes** affecting audit flash points: update markdown narratives but keep JSON unchanged unless a number moves.

For all out-of-cycle changes, commit message should start `Out-of-cycle:` so it's easy to spot in `git log`.

---

## 9. File locations

```
packages/us-federal/rates.2025.json          # current year, fully populated
packages/us-federal/rates.2026.json          # next year, skeleton with _TODO markers
packages/us-federal/ANNUAL-UPDATE-RUNBOOK.md # this file
```

When 2026 closes, archive `rates.2025.json` (do not delete — amended-return skills reach back 3+ years), promote `rates.2026.json` to fully populated, and create `rates.2027.json` skeleton.

Historical files are read-only after their year closes plus an amended-return window (recommend keeping rates.YYYY.json for at least 7 years).

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
