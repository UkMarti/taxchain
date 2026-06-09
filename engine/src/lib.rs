use wasm_bindgen::prelude::*;
use serde_json::json;

#[wasm_bindgen]
pub fn compute_gains(input_json: &str) -> String {
    let input: serde_json::Value = serde_json::from_str(input_json).unwrap_or_default();
    let jurisdiction = input.get("jurisdiction").and_then(|v| v.as_str()).unwrap_or("uk");
    let result = json!({
        "jurisdiction": jurisdiction,
        "total_gain": "0.00",
        "total_loss": "0.00",
        "net_gain": "0.00",
        "tax_liability": "0.00",
        "allowance_used": "0.00",
        "message": "TaxChain Ultra engine ready"
    });
    result.to_string()
}

#[wasm_bindgen]
pub fn harvest_opportunities(portfolio_json: &str, jurisdiction_code: &str) -> String {
    let result = json!([{
        "asset": "BTC",
        "unrealised_loss": "0.00",
        "tax_saving": "0.00",
        "action": format!("Ready to scan portfolio in {}", jurisdiction_code)
    }]);
    result.to_string()
}
