import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        username: 'divik_707',
        password: "hehfudenef"
    })
}