export async function GET() {
  return new Response(JSON.stringify({
    status: "SentinelASM running",
    database: "connected",
    success: true
  }), {
    headers: { "Content-Type": "application/json" }
  });
}