import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  if (!file) {
    return NextResponse.json({ error: 'لم يتم رفع أي ملف' }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'images');
  await writeFile(path.join(uploadDir, fileName), buffer);
  return NextResponse.json({ url: `/images/${fileName}` });
}
