"use client";
import { useState } from "react";

export default function DashboardLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // كلمة المرور من متغير البيئة (يجب ضبطها في .env.local)
    const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || "admin123";
    if (password === correctPassword) {
      localStorage.setItem("dashboard_auth", "1");
      window.location.href = "/dashboard";
    } else {
      setError("كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-darkTheme2">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkTheme rounded shadow p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">تسجيل الدخول للوحة التحكم</h2>
        <input
          type="password"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring"
          placeholder="كلمة المرور"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm mb-2 text-center">{error}</div>}
        <button type="submit" className="w-full bg-primaryColor text-white py-2 rounded hover:bg-primaryColor/90 transition">دخول</button>
      </form>
    </div>
  );
}
