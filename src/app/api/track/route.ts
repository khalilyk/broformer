import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    if (typeof path !== "string" || path.startsWith("/admin")) {
      return NextResponse.json({ ok: true });
    }

    await db.pageView.create({
      data: {
        path: path.slice(0, 300),
        referrer: (req.headers.get("referer") ?? "").slice(0, 300),
      },
    });
  } catch {
    // Never block page rendering on tracking failures.
  }
  return NextResponse.json({ ok: true });
}
