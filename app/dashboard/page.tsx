"use client";
import { useEffect, useState } from "react";
import { FaCog, FaSlidersH, FaFileAlt } from "react-icons/fa";

// عرّف نوع ActivityType بشكل مبسط مؤقتًا
interface ActivityType {
  type: string;
  text: string;
  date: string;
}

export default function DashboardPage() {
  const [sliderCount, setSliderCount] = useState(0);
  const [governanceCount, setGovernanceCount] = useState(0);
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    // جلب عدد السلايدر
    fetch("/api/slider")
      .then(res => res.json())
      .then(data => setSliderCount(Array.isArray(data) ? data.length : 0));
    // جلب عدد الحوكمة
    fetch("/api/governance")
      .then(res => res.json())
      .then(data => setGovernanceCount(Array.isArray(data) ? data.length : 0));
    // جلب الأنشطة
    fetch("/api/activities")
      .then(res => res.json())
      .then(data => setActivities(Array.isArray(data) ? data : []));
  }, []);

  // دالة لإرجاع الأيقونة حسب نوع النشاط
  function getActivityIcon(type: string) {
    switch (type) {
      case "settings": return <FaCog className="text-primaryColor text-lg" />;
      case "slider": return <FaSlidersH className="text-primaryColor text-lg" />;
      case "governance": return <FaFileAlt className="text-primaryColor text-lg" />;
      default: return <FaCog className="text-primaryColor text-lg" />;
    }
  }

  return (
    <div className="container mx-auto p-6 mt-28 h-screen">
      <h1 className="text-2xl font-bold mb-4">مرحباً بك في لوحة التحكم</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-8">
        <div className="bg-white dark:bg-darkTheme rounded shadow p-4 text-center flex flex-col items-center justify-center">
          <FaSlidersH className="text-primaryColor text-3xl mb-2" />
          <div className="text-3xl font-bold text-primaryColor">{sliderCount}</div>
          <div className="text-gray-500">شرائح السلايدر</div>
        </div>
        <div className="bg-white dark:bg-darkTheme rounded shadow p-4 text-center flex flex-col items-center justify-center">
          <FaFileAlt className="text-primaryColor text-3xl mb-2" />
          <div className="text-3xl font-bold text-primaryColor">{governanceCount}</div>
          <div className="text-gray-500">ملفات الحوكمة</div>
        </div>
      </div>
      <div className="bg-white dark:bg-darkTheme rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">آخر الأنشطة</h2>
        <ul className="pr-2 text-right space-y-3">
          {activities.length === 0 && (
            <li className="text-gray-400 text-sm">لا توجد أنشطة حديثة</li>
          )}
          {activities.map((activity, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              {getActivityIcon(activity.type)}
              <span>{activity.text}</span>
              <span className="ml-auto text-xs text-gray-400">{activity.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
