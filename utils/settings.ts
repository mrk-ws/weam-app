import { GeneralSettings } from "@/types/settings";
import clientPromise from "@/utils/db";

export async function getGeneralSettings(): Promise<GeneralSettings | null> {
  // If running on the server, fetch directly from MongoDB
  if (typeof window === "undefined") {
    try {
      const client = await clientPromise;
      const db = client.db();
      const settings = await db.collection("settings").findOne({});
      return settings as GeneralSettings;
    } catch {
      return null;
    }
  } else {
    // On the client, fallback to API route
    try {
      const res = await fetch("/api/settings");
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }
}
