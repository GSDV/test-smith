import { NextRequest, NextResponse } from "next/server";
import { test1 } from "@util/test/test1";
import { sleep } from "@util/sleep";



/**
 * This endpoint takes nothing and sends back simulated test.
 * Used in the /test page, on mount.
 * 
 * In a real app, we would validate the user and use the configuration stored in the database.
 * If not valid or not existing, we would send a non 200 HTTP error.
 * We would then use config to generate and send back test.
 */
export async function GET(req: NextRequest) {
    console.log("Generating test from config...");

    await sleep(1000); // Simulate some operations happening.

    console.log("Test generated!");

    return NextResponse.json({ msg: "Success.", test: test1 }, { status: 200 });
}