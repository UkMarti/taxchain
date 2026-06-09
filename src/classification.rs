use crate::get_rules;
use crate::amount::Amount;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum TransactionClass {
    Swap,
    Transfer,
    Income(IncomeSubtype),
    Expense,
    Disposal,
    Ignored,
    NeedsInput(String),
    Assumed(String), // conservative default applied
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum IncomeSubtype {
    Staking,
    Mining,
    Airdrop,
    LiquidityFee,
}

pub fn classify_transaction(tx: &NormalizedTransaction) -> TransactionClass {
    let rules_guard = get_rules();
    let rules = rules_guard.as_ref().unwrap();
    // First check patterns
    for (category, pattern) in &rules.patterns {
        if let PatternValue::Table(rows) = pattern {
            for row in rows {
                if let Some(merchant) = row.get("Merchant") {
                    if tx.to_address.contains(merchant) || tx.memo.contains(merchant) {
                        let classification = row.get("Classification").unwrap_or(&"Unknown".to_string());
                        return match classification.as_str() {
                            "Swap" => TransactionClass::Swap,
                            "Income" => TransactionClass::Income(IncomeSubtype::Staking), // refine
                            "Expense" => TransactionClass::Expense,
                            "Ignored" => TransactionClass::Ignored,
                            _ => TransactionClass::Assumed("Pattern match but unknown type".to_string()),
                        };
                    }
                }
            }
        }
    }
    // DeFi protocol detection (Uniswap, Aave, etc.)
    if tx.to_address.starts_with("0x") && known_dex(tx.to_address) {
        return TransactionClass::Swap;
    }
    if tx.value == Amount::ZERO {
        return TransactionClass::Ignored;
    }
    TransactionClass::NeedsInput("Unknown contract or transaction type".to_string())
}

fn known_dex(address: &str) -> bool {
    // Lookup from extracted patterns
    false
}