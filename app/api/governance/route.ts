import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/db';
import { MongoClient, Db, ObjectId } from 'mongodb';

const COLLECTION = 'governance';

export async function GET() {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const items = await db.collection(COLLECTION).find({}).toArray();
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const data = await req.json();
  const result = await db.collection(COLLECTION).insertOne(data);
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'governance',
    text: `تم إضافة ملف حوكمة جديد: ${data.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
  });
  return NextResponse.json({ _id: result.insertedId, ...data });
}

export async function PUT(req: NextRequest) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const data = await req.json();
  const { _id, ...rest } = data;
  await db.collection(COLLECTION).updateOne({ _id: new ObjectId(_id) }, { $set: rest });
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'governance',
    text: `تم تعديل ملف حوكمة: ${rest.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const { _id } = await req.json();
  // جلب الملف قبل الحذف للحصول على العنوان
  const item = await db.collection(COLLECTION).findOne({ _id: new ObjectId(_id) });
  await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(_id) });
  // إضافة سجل نشاط جديد
  await db.collection('activities').insertOne({
    type: 'governance',
    text: `تم حذف ملف حوكمة: ${item?.title || ''}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
  });
  return NextResponse.json({ success: true });
}
