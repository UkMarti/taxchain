// Standalone telemetry mock for taxchain
export function publishObservation(event: string, data: any) {
    console.log(`[Telemetry Mock] Event recorded: ${event}`, JSON.stringify(data));
}
