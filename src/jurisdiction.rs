use crate::{get_rules, Amount};
use std::collections::HashMap;

pub struct JurisdictionRules {
    pub country_code: String,
    pub cgt_allowance: Amount,
    pub cgt_rates: HashMap<String, f64>, // e.g., "basic": 10, "higher": 24
    pub income_tax_brackets: Vec<(Amount, f64)>,
    pub defi_treatment: HashMap<String, String>, // "staking": "income"
}

impl JurisdictionRules {
    pub fn load(country: &str) -> Option<Self> {
        let rules_guard = get_rules();
        let rules = rules_guard.as_ref()?;
        let jurisdiction = rules.jurisdictions.get(country)?;
        let crypto_skill = jurisdiction.get(&format!("{}-crypto-tax", country))?;
        let fm = &crypto_skill.frontmatter;

        let allowance = fm.get("allowance")
            .and_then(|v| v.as_str())
            .and_then(|s| Amount::from_dec_str(s).ok())
            .unwrap_or(Amount::ZERO);

        let rates = fm.get("rates")
            .and_then(|v| v.as_object())
            .map(|obj| {
                let mut map = HashMap::new();
                for (k, v) in obj {
                    if let Some(num) = v.as_f64() { map.insert(k.clone(), num); }
                }
                map
            }).unwrap_or_default();

        let defi = fm.get("defi")
            .and_then(|v| v.as_object())
            .map(|obj| {
                let mut map = HashMap::new();
                for (k, v) in obj {
                    if let Some(s) = v.as_str() { map.insert(k.clone(), s.to_string()); }
                }
                map
            }).unwrap_or_default();

        Some(Self {
            country_code: country.to_string(),
            cgt_allowance: allowance,
            cgt_rates: rates,
            income_tax_brackets: vec![], // parse from income-tax skill
            defi_treatment: defi,
        })
    }

    pub fn compute_cgt(&self, gains: Amount) -> Amount {
        let taxable = if gains > self.cgt_allowance { gains - self.cgt_allowance } else { Amount::ZERO };
        let rate = self.cgt_rates.get("higher").unwrap_or(&0.0);
        Amount::from_dec_str(&(taxable.to_decimal().to_f64().unwrap() * rate).to_string()).unwrap()
    }
}