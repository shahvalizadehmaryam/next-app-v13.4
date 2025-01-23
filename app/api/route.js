import { NextResponse } from "next/server";
const data = [
  { name: "milad", lastName: "Azami" },
  { name: "erfan", lastName: "Yousefi" },
];
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const filteredData = data.filter((i) => i.name === name);
  return NextResponse.json(filteredData);
}
export async function POST(req) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json(`you are ${body.data.name}`);
}
