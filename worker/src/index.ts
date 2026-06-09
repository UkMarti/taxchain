/// <reference types="@cloudflare/workers-types" />

// Import the .wasm file directly (returns a WebAssembly.Module)
import wasmModule from "../pkg/taxchain_engine_bg.wasm";

let wasmExports: any = null;

async function getWasm() {
  if (wasmExports) return wasmExports;
  // Instantiate the module with no imports (our Rust code has no external dependencies)
  const instance = await WebAssembly.instantiate(wasmModule, {});
  wasmExports = instance.exports;
  return wasmExports;
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    try {
      const wasm = await getWasm();

      if (path === "/api/compute" && request.method === "POST") {
        const body = await request.json();
        // The exported function name must match what's in your Rust code
        const resultStr = wasm.compute_gains(JSON.stringify(body));
        return new Response(resultStr, { headers });
      }

      if (path === "/api/harvest" && request.method === "POST") {
        const { portfolio, jurisdiction } = await request.json();
        const resultStr = wasm.harvest_opportunities(JSON.stringify(portfolio), jurisdiction);
        return new Response(resultStr, { headers });
      }

      return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers });
    }
  },
};