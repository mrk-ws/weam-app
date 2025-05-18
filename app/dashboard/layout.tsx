"use client";
import { useState, useEffect } from "react";
import { FaCog, FaSlidersH, FaFileAlt } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const menu = [
    { label: "الرئيسية", icon: <span className="text-xl">🏠</span>, href: "/dashboard" },
    { label: "السلايدر", icon: <FaSlidersH />, href: "/dashboard/slider" },
    { label: "الحوكمة", icon: <FaFileAlt />, href: "/dashboard/governance" },
    { label: "الإعدادات", icon: <FaCog />, href: "/dashboard/settings" },
  ];

  useEffect(() => {
    // لا تطبق الحماية على صفحة تسجيل الدخول
    if (pathname === "/dashboard/login") return;
    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("dashboard_auth") === "1";
      if (!isAuth) {
        window.location.href = "/dashboard/login";
      }
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkTheme2">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 bg-slate-100 dark:bg-darkTheme  h-screen fixed md:static z-40 ${sidebarOpen ? 'w-56' : 'w-16'} flex flex-col items-center py-6 border-l-2 p-2 `}> 
        <button
          className=" mt-28 right-0 my-2 text-2xl text-primaryColor focus:outline-none"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <span className="text-xl">{sidebarOpen ? '✖️' : '☰'}</span>
        </button>
        <nav className="flex-1 mt-8 w-full">
          <ul className="flex flex-col gap-2 w-full">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-gray-700 dark:text-white hover:bg-primaryColor/10 hover:text-primaryColor ${sidebarOpen ? 'justify-start' : 'justify-center'} ${pathname === item.href ? 'bg-primaryColor/20 text-primaryColor' : ''}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto mb-2 text-xs text-gray-400 dark:text-gray-500 flex flex-col items-center gap-2">
          {sidebarOpen && <span>© {new Date().getFullYear()} جميع الحقوق محفوظة</span>}
          <button
            onClick={() => {
              localStorage.removeItem("dashboard_auth");
              window.location.href = "/dashboard/login";
            }}
            className="text-xs text-red-500 hover:underline mt-2"
          >
            تسجيل الخروج
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-56' : 'ml-16'} p-6`}>{children}</main>
    </div>
  );
}