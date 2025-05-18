import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] mt-20 flex flex-col justify-center items-center bg-gradient-to-br from-primaryColor/10 to-white dark:from-darkTheme dark:to-darkTheme2 p-6">
      <div className="bg-white dark:bg-darkTheme rounded-xl shadow-lg px-8 py-10 flex flex-col items-center gap-4 max-w-md w-full">
        <h2 className="text-6xl font-extrabold text-primaryColor mb-2">404</h2>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-1">الصفحة غير موجودة</p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-4 text-center">عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.</p>
        <Link className="flex gap-2 items-center text-lg font-bold text-primaryColor hover:underline transition" href="/">
          <TbArrowBackUp className="text-2xl" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}