import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@util/sleep";



// Send test generation config to server.
export async function POST(req: NextRequest) {
    await sleep(1000);
    return NextResponse.json({}, { status: 200 });
}