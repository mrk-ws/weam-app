import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";

const Program1 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Program Image */}
      <img
        src="/charity-program.jpg"
        alt="Charity Program"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Program Details */}
      <h1 className="text-3xl font-bold mt-4">برنامج دعم الأيتام</h1>
      <p className="text-gray-600 mt-2">
        يهدف البرنامج إلى تقديم الدعم المادي والمعنوي للأطفال الأيتام من خلال توفير بيئة تعليمية وصحية مناسبة.
      </p>

      {/* Goals */}
      <h2 className="text-2xl font-semibold mt-4">أهداف البرنامج</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>تقديم الدعم التعليمي للأطفال الأيتام</li>
        <li>تحسين الظروف المعيشية لهم</li>
        <li>توفير الرعاية الصحية والنفسية</li>
      </ul>

      {/* Target Audience */}
      <h2 className="text-2xl font-semibold mt-4">المستفيدون المستهدفون</h2>
      <p className="text-gray-700">الأطفال الأيتام من الفئات الأكثر احتياجًا في المجتمع.</p>

      {/* Expected Impact */}
      <h2 className="text-2xl font-semibold mt-4">الأثر المتوقع</h2>
      <p className="text-gray-700">
        تحسين مستوى التعليم والصحة للأطفال الأيتام، وتعزيز فرصهم في المستقبل.
      </p>

      {/* Implementation Steps */}
      <h2 className="text-2xl font-semibold mt-4">مراحل التنفيذ</h2>
      <ul className="list-decimal list-inside text-gray-700">
        <li>تحديد الأطفال المستفيدين</li>
        <li>توفير الدعم التعليمي والصحي</li>
        <li>متابعة وتقييم الأثر</li>
      </ul>

      {/* Share Section */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-semibold">مشاركة البرنامج:</p>
        <div className="flex space-x-3">
          <FaFacebook className="text-blue-600 cursor-pointer text-xl" />
          <FaTwitter className="text-blue-400 cursor-pointer text-xl" />
          <FaLinkedin className="text-blue-700 cursor-pointer text-xl" />
          <FaShareAlt className="text-gray-600 cursor-pointer text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Program1;
