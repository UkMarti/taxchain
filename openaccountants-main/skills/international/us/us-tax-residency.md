---
name: us-tax-residency
description: >
  US tax residency for non-US-citizens: substantial presence test, green card test,
  first-year election, closer connection exception, treaty tie-breaker, dual-status
  returns. Trigger on: "US tax resident alien", "substantial presence test", "183-day
  US test", "green card tax residency", "first year election US", "closer connection
  exception", "US dual status return", "non-resident alien US", "treaty tie-breaker US",
  "moving to US taxes", "leaving US taxes". US citizens are always resident — this
  skill covers non-citizens only.
version: 1.0
jurisdiction: US
tax_year: 2025
category: international
---

# US Tax Residency (Non-Citizens) — v1.0

## Core rule

For non-US-citizens, US tax residency (as a "resident alien") is determined by two tests.
Meet **either** test → resident alien (taxed on worldwide income like a US citizen).
Meet **neither** → non-resident alien (taxed only on US-source income).

Note: **US citizens and green-card holders are ALWAYS US tax residents** regardless of
where they live. This skill covers non-citizens on temporary visas only.

---

## Test 1: Green Card Test

A person who holds a **lawful permanent resident (LPR) / green card** is a US resident
alien for tax purposes for the entire year, regardless of days present.

Residency ends when the green card is **revoked or abandoned** (USCIS Form I-407).
Abandonment may trigger the expatriation exit tax — see `us-expatriation-exit-tax`.

---

## Test 2: Substantial Presence Test (SPT)

Present in the US for **183 days or more** using a 3-year weighted formula:

```
Days this year × 1  +  Days last year × 1/3  +  Days 2 years ago × 1/6  ≥  183
```

Must also be present at least **31 days during the current year**.

**Days that do NOT count:**
- Days as an exempt individual (certain F, J, M, Q visa holders; diplomats; commuters from Canada/Mexico)
- Days unable to leave due to medical condition that arose in the US

---

## Closer Connection Exception

Even if SPT is met, the person is **not** a resident alien if:
- Present in the US for **fewer than 183 days** in the current year, AND
- Has a **tax home** in a foreign country, AND
- Has a **closer connection** to that country (family, bank accounts, driving licence, social memberships, etc.)

Filed on **Form 8840** (due 15 June for prior year).

---

## First-Year Election

A non-resident alien who does not meet SPT in the current year but meets SPT in the
following year can **elect** to be treated as a US resident from a qualifying date in
the current year.

Conditions: present at least 31 consecutive days and 75% of days from qualifying date
to 31 December. Filed with Form 1040 + statement.

---

## Treaty Tie-Breaker

If a person is a resident of both the US and a treaty country under each country's
domestic rules, the treaty tie-breaker (Article 4 of most DTAs) determines residence:
1. Permanent home
2. Centre of vital interests
3. Habitual abode
4. Nationality
5. Competent authority

File **Form 8833** to claim treaty-based position.

---

## Dual-Status Returns

In the year of arrival or departure, a person may be a resident for part of the year
and a non-resident for the rest. A **dual-status return** covers both periods:
- Resident period: worldwide income taxed
- Non-resident period: only US-source income taxed

**Restrictions on dual-status returns**: cannot use standard deduction; cannot file
jointly (unless making election to be treated as full-year resident).

---

## When US residency ends

Residency terminates on the last day of the year the person was present in the US
as a resident, unless a closer connection exception applies.

**Important**: The year of departure requires careful analysis — if SPT is met for
the year, the person may be a US resident for the full year even after physically
leaving mid-year.

---

## Sources

- IRC §7701(b) — definition of resident alien
- IRS Publication 519 (US Tax Guide for Aliens)
- Form 8840 (closer connection), Form 8833 (treaty-based position)
- Form 1040-NR (non-resident alien return)

> Working paper only. Immigration status and tax status are separate; holding a US
> work visa does not automatically make you a tax resident. Have a qualified US CPA
> or tax attorney review the specific visa category and day count.
