# Correction Feedback Loop Specification v0.1

Status: **DRAFT**
Author: OpenAccountants core
Last revised: 2026-05-22

This is the spec for the **Level 6** feature from [INTELLIGENCE-ROADMAP.md](INTELLIGENCE-ROADMAP.md) — the system that turns every practitioner review into a learning event for the skill set. This is the moat.

---

## 1. The problem

Today, when a practitioner reviews an AI-generated working paper and corrects an error, the correction is lost. The same error appears for the next user.

Open-source skill libraries can be copied. A correction feedback loop that makes the skills materially better over time cannot.

---

## 2. The data model

Each correction is a structured record:

```yaml
correction_id: 2026-05-22-DE-VAT-001
skill_id: germany-vat-return
skill_version: 1.4.2
applied_to_period: 2025-Q1
original_position:
  description: "Reverse charge on EU services applied to Box 9a (input)"
  citation_used: "UStG §13b"
correction:
  description: "Should be Box 9 (services purchased, line 21 not 22)"
  citation: "UStG §13b paragraph 2, BMF letter 2024-03-15"
practitioner:
  name: "Maria Schmidt"
  credential: "Steuerberater (StB)"
  registration_id: "DE-StB-12345"
  jurisdiction: DE
practitioner_signed_off: true
correction_date: 2026-05-22
effective_period:
  from: 2024-01-01
  to: null            # applies onwards
confidence: high      # or medium, low
upstream_root_cause:
  identifier: "Box 9 vs 9a classification"
  affected_skills:
    - germany-vat-return
    - de-freelance-intake
  affected_versions: [">= 1.0.0"]
```

---

## 3. Lifecycle

### Step 1 — Practitioner reviews working paper

The AI-generated brief includes a structured correction template at the end:

```
[ ] Reviewed. No corrections.
[ ] Reviewed. Corrections noted below.

For each correction:
- Item description:
- Original position (what the AI said):
- Correct position (what it should say):
- Citation:
- Confidence (high / medium / low):
- Practitioner sign-off (name + credential):
```

### Step 2 — Correction captured

Two paths:
- **GitHub PR** with the correction YAML attached to the relevant skill folder
- **Web form** at openaccountants.com that produces the same YAML

### Step 3 — Review and merge

A skill maintainer (open-source committer with mod rights for the jurisdiction) reviews the correction:
- Verifies practitioner credential
- Cross-checks the citation
- Tags the underlying skill error
- Updates the skill markdown / rates YAML

### Step 4 — Publication

The correction becomes part of the skill at the next release. The skill version increments (semver minor or patch). A changelog entry credits the practitioner publicly:

```markdown
## germany-vat-return v1.4.3 (2026-05-29)

### Corrections
- Reverse charge on EU services now correctly maps to Box 9 (not 9a).
  Credited to: Maria Schmidt, Steuerberater (StB), Registration DE-StB-12345.
  Reference: BMF letter 2024-03-15.
```

### Step 5 — Pattern detection

After N corrections on the same item:
- The system flags the skill as needing a deeper review
- A skill audit task is created for community owners
- Recurring corrections from different practitioners cross-validate

```yaml
trigger:
  threshold: 3 corrections of same upstream_root_cause from 3+ different practitioners within 60 days
action:
  flag: "Systematic error — full review required"
  notify: skill maintainers + jurisdiction lead
```

### Step 6 — Cross-skill propagation

A correction in one skill may reveal an error pattern that affects multiple skills (e.g., a misunderstanding of EU place of supply impacts every EU country VAT skill). Cross-jurisdiction maintainer review triggers updates across the affected family.

---

## 4. Practitioner verification

To prevent malicious / careless corrections:

| Tier | Practitioner | Required evidence |
|---|---|---|
| **L1 — Anonymous** | Anyone | Correction logged but not merged without independent verification |
| **L2 — Credentialed** | Self-declared credential | Correction merged after maintainer review; "self-declared" badge |
| **L3 — Verified** | Credential verified against public registry | Correction merged with verified badge; weight in pattern detection |
| **L4 — Active reviewer** | Verified + active history of accepted corrections | Mod rights for that jurisdiction |

---

## 5. Public credit and contributor recognition

Every published skill maintains a contributor list at the bottom:

```markdown
## Verified by
- Maria Schmidt, Steuerberater (StB) — DE corrections, 2026 ([profile](https://www.openaccountants.com/contributors/maria-schmidt))
- Nathan Wiebe, CPA — CA-MB skill confirmation, 2026 ([profile](https://www.openaccountants.com/contributors/nathan-wiebe))
```

The practitioner profile page shows their contributions across all skills.

---

## 6. Liability and disclaimer

**[T1] Critical:** Each correction is the corrector's professional opinion based on facts known to them. Other practitioners may disagree. The skill includes the most recent accepted correction but remains subject to local practitioner review.

The contributor agreement (CLA) explicitly disclaims liability for the corrector's published position. Users are warned that no skill substitutes for individual professional advice.

---

## 7. Data and audit

All corrections are git-tracked. Full history is reconstructable.

For paying customers / API users, a quarterly compliance report can be generated showing:
- Skills used during the period
- Versions in force at each transaction date
- Corrections that landed during the period (if any retroactive correction would have changed the user's outcome)

---

## 8. Implementation phases

### Phase A (Q3 2026): manual correction capture

- GitHub PR-only intake
- Markdown-only changes
- Maintainer-led review

### Phase B (Q4 2026): web-form intake + practitioner directory

- openaccountants.com correction form
- Practitioner registration with credential
- Mod assignment per jurisdiction

### Phase C (Q1 2027): pattern detection + flagging

- Automated cross-correction matching
- Skill-audit triggers
- Cross-skill propagation review

### Phase D (Q2 2027): integration with temporal versioning

- Corrections specify effective period
- Historical recomputation possible
- Practitioner-side "what would this have been with the corrected rules" feature

### Phase E (Q3 2027): API + customer compliance reporting

- API endpoint for skill version + correction history
- Customer-facing report: "your filings in period X used skill versions [a,b,c]; subsequent corrections were [list]"

---

## 9. Open questions

- **Conflict resolution** when two credentialed practitioners disagree on a position — who decides? Suggest: jurisdiction lead maintainer escalates; if unresolvable, document the divergent positions in the skill (the "two-tax-opinion" model).
- **Time-bounded corrections** — some corrections relate to old years where the law has since changed. The temporal versioning spec handles the underlying rate change; corrections should specify their effective period.
- **Withdrawn corrections** — if a practitioner later realises their correction was wrong, what's the process? Suggest: withdrawal is itself a tracked correction event.
- **Payment / incentive** — does the project pay practitioners for corrections? Suggest: no payment for individual corrections in the open-source repo; openaccountants.com offers paid review tier where practitioners earn for client-specific reviews.

---

## 10. Why this is the moat

Open-source skills can be copied. The data — the set of practitioner corrections accumulated over time — cannot. The longer the system runs, the more accurate the skills get for the jurisdictions where practitioners actively contribute.

This compounds. After a year of corrections, a heavily-used jurisdiction's skill is materially better than any newly-launched competitor's first-day skill.

The flywheel:
- More users → more reviews → more corrections → better skills → more trust → more users

The key is making the cost of contributing a correction low (web form, no GitHub required) and the reward high (public credit, professional visibility, demonstrated expertise).
