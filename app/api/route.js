import { NextResponse } from "next/server";

export async function GET() {
  const data = { name: "maryam", lastName: "shahvali" };
  return NextResponse.json({ data });
}
