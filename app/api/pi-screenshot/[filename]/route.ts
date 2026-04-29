import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const PI_SCREENSHOT_URL = `https://rpi4.tailbfccfb.ts.net/data/screenshots/${filename}`;

  try {
    const response = await fetch(PI_SCREENSHOT_URL);

    if (!response.ok) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400", // Cache screenshots for 24h
      },
    });
  } catch (error) {
    return new NextResponse("Failed to proxy image", { status: 500 });
  }
}
