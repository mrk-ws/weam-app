import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/db';
import { ObjectId } from 'mongodb';

const DB_NAME = 'weam_dashboard';
const COLLECTION = 'slider';

export async function GET() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const sliders = await db.collection(COLLECTION).find({}).toArray();
  return NextResponse.json(sliders);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).insertOne(data);
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'slider',
    text: `تم إضافة سلايدر جديد: ${data.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    activated: true, // تفعيل النشاط
  });
  return NextResponse.json({ insertedId: result.insertedId });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { _id, ...rest } = data;
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  await db.collection(COLLECTION).updateOne({ _id: new ObjectId(_id) }, { $set: rest });
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'slider',
    text: `تم تعديل سلايدر: ${rest.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    activated: true, // تفعيل النشاط
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { _id } = await req.json();
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  // جلب السلايدر قبل الحذف للحصول على العنوان
  const slider = await db.collection(COLLECTION).findOne({ _id: new ObjectId(_id) });
  await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(_id) });
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'slider',
    text: `تم حذف سلايدر: ${slider?.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    activated: true, // تفعيل النشاط
  });
  return NextResponse.json({ success: true });
}
