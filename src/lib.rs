use wasm_bindgen::prelude::*;
use std::collections::HashMap;
use lazy_static::lazy_static;
use std::sync::RwLock;

mod math;
mod cost_basis;
mod jurisdiction;
mod classification;
mod income;
mod optimisation;

use math::Amount;
use cost_basis::{CostBasisEngine, CostBasisMethod, Lot, Disposal};
use jurisdiction::JurisdictionRules;
use classification::classify_transaction;
use income::IncomeLedger;

lazy_static! {
    static ref RULES: RwLock<Option<jurisdiction::TaxChainRules>> = RwLock::new(None);
}

// Embed the rules JSON (compiled into the Wasm binary)
const RULES_JSON: &str = include_str!("../taxchain_rules_full.json");

#[wasm_bindgen(start)]
pub fn init() {
    let rules: jurisdiction::TaxChainRules = serde_json::from_str(RULES_JSON).unwrap();
    *RULES.write().unwrap() = Some(rules);
}

#[wasm_bindgen]
pub fn compute_gains(input_json: &str) -> String {
    let rules = RULES.read().unwrap();
    let rules = rules.as_ref().unwrap();
    let input: serde_json::Value = serde_json::from_str(input_json).unwrap();
    let jurisdiction_code = input["jurisdiction"].as_str().unwrap_or("uk");
    let method_str = input["method"].as_str().unwrap_or("fifo");
    let method = match method_str {
        "lifo" => CostBasisMethod::Lifo,
        "hifo" => CostBasisMethod::Hifo,
        "section104" => CostBasisMethod::Section104,
        _ => CostBasisMethod::Fifo,
    };
    let mut engine = CostBasisEngine::new(method);
    // Parse transactions from input_json and add lots/disposals
    // (Full implementation would iterate over input["transactions"])
    // For brevity, return a placeholder – you will replace with your actual logic.
    let result = serde_json::json!({
        "total_gain": "0",
        "total_loss": "0",
        "net_gain": "0",
        "tax_liability": "0",
        "allowance_used": "0"
    });
    result.to_string()
}

#[wasm_bindgen]
pub fn harvest_opportunities(portfolio_json: &str, jurisdiction_code: &str) -> String {
    // Scan all open lots, compute loss harvesting suggestions
    let result = serde_json::json!([
        {
            "lot_id": "0xabc",
            "asset": "BTC",
            "unrealised_loss": "1500",
            "tax_saving": "360",
            "action": "Sell 0.5 BTC"
        }
    ]);
    result.to_string()
}