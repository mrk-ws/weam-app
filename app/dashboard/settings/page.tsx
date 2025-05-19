"use client"
import { useEffect, useState, useRef } from "react";
import { GeneralSettings } from "@/types/settings";
import toast from "react-hot-toast";
import Image from "next/image";

// صفحة إعدادات عامة مختصرة: شعار، اسم، وصف، بريد إلكتروني

interface SimpleSettings {
  logoUrl: string;
  siteName: string;
  siteDescription: string;
  email: string;
}

const DEFAULT_SETTINGS: SimpleSettings = {
  logoUrl: "/logo-hed.png",
  siteName: "اسم الموقع",
  siteDescription: "وصف مختصر للموقع يظهر في التذييل أو الهيدر.",
  email: "info@example.com"
};

export default function Page() {
  const [settings, setSettings] = useState<SimpleSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string>(DEFAULT_SETTINGS.logoUrl);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // جلب الإعدادات من قاعدة البيانات عند تحميل الصفحة
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        setSettings({
          logoUrl: data.logoUrl || DEFAULT_SETTINGS.logoUrl,
          siteName: data.siteName || DEFAULT_SETTINGS.siteName,
          siteDescription: data.siteDescription || DEFAULT_SETTINGS.siteDescription,
          email: data.email || DEFAULT_SETTINGS.email,
        });
        setLogoPreview(data.logoUrl || DEFAULT_SETTINGS.logoUrl);
      });
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  }

  // عند رفع صورة جديدة، احفظها في قاعدة البيانات
  async function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoPreview(URL.createObjectURL(file));
      // رفع الصورة إلى السيرفر (API)
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      if (uploadData.url) {
        setSettings((prev) => ({ ...prev, logoUrl: uploadData.url }));
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // حفظ الإعدادات في قاعدة البيانات عبر API
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setLoading(false);
    toast.success("تم حفظ الإعدادات بنجاح");
  }

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme rounded-lg shadow p-6 mt-36">
      <h2 className="text-2xl text-center font-bold mb-6">الإعدادات العامة</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">شعار الموقع (صورة)</label>
          <div className="flex items-center gap-4">
            <Image
              src={logoPreview}
              alt="شعار الموقع"
              width={80}
              height={80}
              className="w-20 h-20 rounded shadow border object-contain bg-white"
            />
            <input
              type="file"
              accept="image/*"
              ref={logoInputRef}
              onChange={handleLogoChange}
              className="block"
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2">اسم الموقع</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">وصف الموقع</label>
          <textarea
            name="siteDescription"
            value={settings.siteDescription}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={2}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primaryColor text-white px-6 py-2 rounded font-bold min-w-[120px]"
            disabled={loading}
          >
            {loading ? "جارٍ الحفظ..." : "حفظ التغييرات"}
          </button>
        </div>
      </form>
      <div className="mt-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={logoPreview}
            alt="شعار الموقع"
            width={64}
            height={64}
            className="w-16 h-16 rounded shadow border object-contain bg-white"
          />
          <div className="font-bold text-lg">{settings.siteName}</div>
          <div className="text-sm text-gray-500">{settings.siteDescription}</div>
          <div className="text-xs text-gray-400">{settings.email}</div>
        </div>
      </div>
    </div>
  );
}
