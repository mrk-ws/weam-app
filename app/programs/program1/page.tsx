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
      <h1 className="text-3xl font-bold mt-4">برنامج دعم الأيتام</h1>
      <p className="text-gray-600 dark:text-gray-200 mt-2">
        يهدف البرنامج إلى تقديم الدعم المادي والمعنوي للأطفال الأيتام من خلال
        توفير بيئة تعليمية وصحية مناسبة.
      </p>

      {/* Goals */}
      <h2 className="text-2xl font-semibold mt-4">أهداف البرنامج</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
        <li>تقديم الدعم التعليمي للأطفال الأيتام</li>
        <li>تحسين الظروف المعيشية لهم</li>
        <li>توفير الرعاية الصحية والنفسية</li>
      </ul>

      {/* Target Audience */}
      <h2 className="text-2xl font-semibold mt-4">المستفيدون المستهدفون</h2>
      <p className="text-gray-700 dark:text-gray-200">
        الأطفال الأيتام من الفئات الأكثر احتياجًا في المجتمع.
      </p>

      {/* Expected Impact */}
      <h2 className="text-2xl font-semibold mt-4">الأثر المتوقع</h2>
      <p className="text-gray-700 dark:text-gray-200">
        تحسين مستوى التعليم والصحة للأطفال الأيتام، وتعزيز فرصهم في المستقبل.
      </p>

      {/* Implementation Steps */}
      <h2 className="text-2xl font-semibold mt-4">مراحل التنفيذ</h2>
      <ul className="list-decimal list-inside text-gray-700 dark:text-gray-200">
        <li>تحديد الأطفال المستفيدين</li>
        <li>توفير الدعم التعليمي والصحي</li>
        <li>متابعة وتقييم الأثر</li>
      </ul>

      {/* Share Section */}
      <Link
        href={"https://store.weam.org.sa/"}
        target="blank"
        className="rounded-lg relative w-40 h-10 cursor-pointer flex items-center border border-primaryColor bg-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden my-2 mx-auto"
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
