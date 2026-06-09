use crate::math::Amount;
use crate::jurisdiction::JurisdictionRules;

pub struct IncomeEvent {
    pub date: chrono::NaiveDate,
    pub asset: String,
    pub quantity: Amount,
    pub fair_market_value: Amount, // in fiat
    pub event_type: IncomeType,
}

pub enum IncomeType {
    StakingReward,
    MiningReward,
    Airdrop,
    LiquidityMiningFee,
}

pub struct IncomeLedger {
    events: Vec<IncomeEvent>,
}

impl IncomeLedger {
    pub fn total_income(&self) -> Amount {
        self.events.iter().fold(Amount::ZERO, |acc, e| acc + e.fair_market_value)
    }

    pub fn compute_income_tax(&self, rules: &JurisdictionRules) -> Amount {
        // Simplified: apply progressive brackets
        let total = self.total_income();
        // Use rules.income_tax_brackets to compute tax
        total // placeholder
    }
}