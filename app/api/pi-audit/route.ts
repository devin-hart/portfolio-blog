import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const PI_URL = "https://rpi4.tailbfccfb.ts.net/api/audit";
  
  try {
    const response = await fetch(PI_URL, {
      headers: { 
        "x-api-key": "stagecheck_9f3b2a7c8d",
        "Accept": "application/json"
      },
      next: { revalidate: 0 } // Don't cache the audit data
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Pi is offline" }, { status: 502 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Proxy connection failed" }, { status: 500 });
  }
}
