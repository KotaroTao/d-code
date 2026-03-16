import { put, list, del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const file = form.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const blob = await put(`lp/${file.name}`, file, {
    access: "public",
    addRandomSuffix: false,
  });

  return NextResponse.json(blob);
}

export async function GET() {
  const { blobs } = await list({ prefix: "lp/" });
  return NextResponse.json(blobs);
}

export async function DELETE(request: NextRequest) {
  const { url } = await request.json();
  await del(url);
  return NextResponse.json({ deleted: true });
}
