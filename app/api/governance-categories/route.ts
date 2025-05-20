// Force this API route to be dynamic and not statically generated
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/db';
import { MongoClient, Db, ObjectId } from 'mongodb';

const COLLECTION = 'governance_categories';

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
  return NextResponse.json({ _id: result.insertedId, ...data });
}

export async function PUT(req: NextRequest) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const data = await req.json();
  const { _id, ...rest } = data;
  await db.collection(COLLECTION).updateOne({ _id: new ObjectId(_id) }, { $set: rest });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();
  const { _id } = await req.json();
  await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(_id) });
  return NextResponse.json({ success: true });
}
