# جمعية وئام للتنمية البشرية للأيتام - لوحة تحكم وإدارة الموقع

مشروع ويب متكامل لإدارة محتوى موقع جمعية وئام، مبني باستخدام Next.js (App Router) وTypeScript مع ربط مباشر بقاعدة بيانات MongoDB Atlas. يوفر لوحة تحكم متقدمة لإدارة السلايدر، البرامج، الأخبار، الحوكمة، الإعدادات العامة، ورفع الصور والملفات.

## التقنيات المستخدمة
- **Next.js** v14 (App Router)
- **TypeScript**
- **React**
- **Tailwind CSS**
- **MongoDB Atlas** (قاعدة بيانات سحابية)
- **Framer Motion** (حركات تفاعلية)
- **react-hot-toast** (تنبيهات)
- **next/image** (تحسين الصور)
- **Vercel** (استضافة ونشر تلقائي)

## المميزات الرئيسية
- لوحة تحكم آمنة لإدارة جميع أقسام الموقع (سلايدر، برامج، أخبار، إعدادات، إلخ)
- رفع وتعديل وحذف الصور والملفات مباشرة من المتصفح
- دعم الوضع الليلي والداكن
- حماية صفحات الإدارة بكلمة مرور
- ربط مباشر مع MongoDB Atlas مع معالجة أخطاء متقدمة
- واجهة عربية بالكامل متوافقة مع الجوال
- تحسين تلقائي للصور والأداء عبر next/image
- نشر تلقائي على Vercel مع دعم بيئة الإنتاج

## طريقة التشغيل محليًا
1. تأكد من وجود Node.js 18+
2. ثبت الحزم:
   ```bash
   npm install
   ```
3. أنشئ ملف `.env.local` وضع بيانات الاتصال:
   ```env
   MONGODB_URI=رابط_قاعدة_البيانات
   NEXT_PUBLIC_DASHBOARD_PASSWORD=كلمة_المرور
   ```
4. شغل السيرفر:
   ```bash
   npm run dev
   ```
5. افتح [http://localhost:3000](http://localhost:3000)

## طريقة النشر على Vercel
- يتم النشر تلقائيًا عند رفع أي تعديل على GitHub.
- تأكد من ضبط متغيرات البيئة في إعدادات Vercel.

## الإصدار
- **v1.0.0** (مايو 2025)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
