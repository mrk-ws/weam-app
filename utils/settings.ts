import { GeneralSettings } from "@/types/settings";
import clientPromise from "@/utils/db";
import { Document, WithId } from "mongodb";

export async function getGeneralSettings(): Promise<GeneralSettings | null> {
  // If running on the server, fetch directly from MongoDB
  if (typeof window === "undefined") {
    try {
      const client = await clientPromise;
      const db = client.db();
      const settings = await db.collection("settings").findOne<
        Partial<GeneralSettings> & Document
      >({});
      if (!settings) return null;
      // تحويل الحقول الناقصة إلى قيم افتراضية
      return {
        siteTitle: settings.siteTitle || "اسم الموقع",
        siteDescription: settings.siteDescription || "وصف الموقع",
        logoUrl: settings.logoUrl || "/logo-hed.png",
        primaryColor: settings.primaryColor || "#1e293b",
        secondaryColor: settings.secondaryColor || "#fbbf24",
        facebookUrl: settings.facebookUrl || "",
        twitterUrl: settings.twitterUrl || "",
        instagramUrl: settings.instagramUrl || "",
        ...settings,
      };
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
