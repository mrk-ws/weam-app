import type { Metadata } from "next";
import { Tajawal, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderFooter/header";
import Footer from "@/components/HeaderFooter/footer/Footer";
import BackToTop from "@/components/global/BackToTop";
import { getGeneralSettings } from "@/utils/settings";

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "وئام لتنمية الأيتام - الرئيسية",
  description: "جمعية وئام للتنمية البشرية للأيتام | نسعى لتمكين الايتام واسرهم لتأهيلهم لسوق العمل",
};

export default async function RootLayout({children,}: 
  Readonly<{children: React.ReactNode;}>) {
  const settingsRaw = await getGeneralSettings();
  // إزالة _id أو تحويله لنص حتى لا يحدث خطأ في Client Components
  const { _id, ...settings } = settingsRaw || {};
  return (
    <html lang="ar" dir="rtl">
      <body 
      className={`${tajawal.className} ${geistMono.variable} antialiased
      bg-slate-50 dark:bg-darkTheme text-gray-700 dark:text-gray-100
      transition duration-300 scroll-smooth`}>
        <Header settings={settings} />
          <main className="">
            {children}
          </main>
          <BackToTop/>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
