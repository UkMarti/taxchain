use axum::{
    routing::post,
    Json,
    Router,
    response::IntoResponse,
};
use serde_json::{json, Value};
use tokio::net::TcpListener;

async fn compute_gains(Json(payload): Json<Value>) -> impl IntoResponse {
    let jurisdiction = payload.get("jurisdiction").and_then(|v| v.as_str()).unwrap_or("uk");
    let result = json!({
        "jurisdiction": jurisdiction,
        "total_gain": "0.00",
        "total_loss": "0.00",
        "net_gain": "0.00",
        "tax_liability": "0.00",
        "allowance_used": "0.00",
        "message": "TaxChain Ultra engine (standalone)"
    });
    Json(result)
}

async fn harvest_opportunities(Json(payload): Json<Value>) -> impl IntoResponse {
    let jurisdiction = payload.get("jurisdiction").and_then(|v| v.as_str()).unwrap_or("uk");
    let result = json!([{
        "asset": "BTC",
        "unrealised_loss": "0.00",
        "tax_saving": "0.00",
        "action": format!("Ready in {}", jurisdiction)
    }]);
    Json(result)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/api/compute", post(compute_gains))
        .route("/api/harvest", post(harvest_opportunities));

    let listener = TcpListener::bind("0.0.0.0:8080").await.unwrap();
    println!("Server running on http://0.0.0.0:8080");
    axum::serve(listener, app).await.unwrap();
}
