"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";

const Program1 = () => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${shareUrl}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        alert("تم نسخ رابط الصفحة!");
        return;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-100 dark:bg-darkTheme2 shadow-lg rounded-lg mt-28">
      {/* Program Image */}
      <Image
        src="/images/p2.png"
        alt="Charity Program"
        width={1000}
        height={1000}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Program Details */}
      <h1 className="text-3xl font-bold my-4">برنامج سوق</h1>
      <p className="text-gray-600 dark:text-gray-200 mt-2">
        مبادرة شاملة لتمكين الأيتام اقتصاديًا من خلال تزويدهم بالمهارات والمعرفة
        اللازمة لإنشاء مشاريعهم الخاصة وتحقيق الاستقلال المالي.
      </p>
      <h2 className="text-3xl font-bold mt-6">الفكرة</h2>
      <p className="text-gray-600 dark:text-gray-200 mt-2">
        تحويل التحديات التي يواجهها الأيتام إلى فرص، وتمكينهم من بناء مستقبل مهني مستدام.
      </p>

      {/* Goals */}
      <h2 className="text-2xl font-semibold mt-4">أهداف البرنامج</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
        <li>تدريب 50 يتيماً على إعداد دراسات جدوى لمشاريع صغيرة في مجالات مختلفة بحلول نهاية العام الأول</li>
        <li>تقديم 30 خطة عمل قابلة للتطبيق للمشاريع الصغيرة بحلول نهاية العام الثاني</li>
        <li>الحصول على تمويل لـ 20 مشروعاً صغيراً من مصادر مختلفة بحلول نهاية العام الثالث</li>
        <li>تحقيق معدل نجاح 70% للمشاريع التي تم تمويلها بعد مرور عامين</li>
        <li>زيادة متوسط دخل الأسر المشاركة بنسبة 15% خلال العام الثالث</li>
      </ul>

      {/* Target Audience */}
      <h2 className="text-2xl font-semibold mt-4">المستفيدون المستهدفون</h2>
      <p className="text-gray-700 dark:text-gray-200">
        الأيتام من الجنسين الذين تتراوح أعمارهم بين 18 و22 ، والراغبين في بدء مشاريعهم الخاصة.
      </p>

      {/* Expected Impact */}
      <h2 className="text-2xl font-semibold mt-4">الأثر المتوقع</h2>
      <p className="text-gray-700 dark:text-gray-200">
        تحسين مستوى المعيشة للأيتام، وزيادة فرصهم في الحصول على دخل مستدام, وزيادة عدد المشاريع الصغيرة التي يملكها ويقودها الأيتام, زيادة مساهمة الأيتام في الناتج المحلي الإجمالي وتعزيز روح المبادرة والابتكار لديهم.
      </p>

      {/* Implementation Steps */}
      <h2 className="text-2xl font-semibold mt-4">مراحل التنفيذ</h2>
      <ul className="list-decimal list-inside text-gray-700 dark:text-gray-200">
        <li>التخطيط: تحديد الأهداف، اختيار المشاركين، وضع خطة العمل.</li>
        <li>التدريب: تقديم برامج تدريبية مكثفة في ريادة الأعمال وإعداد دراسات الجدوى.</li>
        <li>تطوير الخطط: مساعدة المشاركين في تطوير خطط أعمال متكاملة.</li>
        <li>التمويل: مساعدة المشاركين في الحصول على التمويل اللازم.</li>
        <li>التشغيل: متابعة المشاريع وتقديم الدعم المستمر.</li>
        <li>التقييم: تقييم أداء المبادرة وتعديل الخطط حسب الحاجة.</li>
      </ul>

      {/* Share Section */}
      <Link
        href={"https://store.weam.org.sa/p/103530"}
        target="blank"
        className="rounded-lg relative w-40 h-10 cursor-pointer flex items-center border border-primaryColor bg-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden mx-auto"
      >
        <span className="text-gray-200 font-semibold mr-12 transform group-hover:translate-x-20 transition-all duration-300">
          إدعم البرنامج
        </span>
        <span className="absolute text-gray-200 right-0 h-full w-10 rounded-lg bg-primaryColor flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <LuHandCoins size={25} />
        </span>
      </Link>
      <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-semibold">شارك البرنامج:</p>
        <div className="flex gap-3">
          <FaFacebook
            className="text-blue-600 cursor-pointer text-xl"
            onClick={() => handleShare("facebook")}
          />
          <FaTwitter
            className="text-blue-400 cursor-pointer text-xl"
            onClick={() => handleShare("twitter")}
          />
          <FaLinkedin
            className="text-blue-700 cursor-pointer text-xl"
            onClick={() => handleShare("linkedin")}
          />
          <FaShareAlt
            className="text-gray-600 cursor-pointer text-xl"
            onClick={() => handleShare("copy")}
          />
        </div>
      </div>
    </div>
  );
};

export default Program1;
