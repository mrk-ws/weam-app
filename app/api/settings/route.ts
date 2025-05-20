import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/db';
import { MongoClient, Db } from 'mongodb';

export async function GET() {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db();
    const settings = await db.collection('settings').findOne({});
    return NextResponse.json(settings || {});
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db();
    const data = await req.json();
    await db.collection('settings').updateOne({}, { $set: data }, { upsert: true });
    // إضافة سجل نشاط جديد مع خاصية التفعيل
    await db.collection('activities').insertOne({
      type: 'settings',
      text: 'تم تعديل إعدادات الموقع',
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      activated: true, // تفعيل النشاط
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}
