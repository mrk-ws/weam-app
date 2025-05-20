// Force this API route to be dynamic and not statically generated
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import clientPromise from '@/utils/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    // جلب آخر 10 أنشطة مرتبة من الأحدث
    const activities = await db.collection('activities')
      .find({})
      .sort({ date: -1 })
      .limit(10)
      .toArray();
    return NextResponse.json(activities);
  } catch (e) {
    // إرجاع رسالة خطأ واضحة مع كود الحالة 500
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}
