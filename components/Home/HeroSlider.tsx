"use client"
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // لاستخدام الأيقونات
import { SliderItem } from "@/types/slider";

const HeroSlider = () => {
  const [slides, setSlides] = useState<SliderItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [settings, setSettings] = useState<{ siteTitle?: string } | null>(null);

  // جلب بيانات السلايدر من API
  useEffect(() => {
    async function fetchSlides() {
      const res = await fetch("/api/slider");
      const data = await res.json();
      setSlides(data);
    }
    fetchSlides();
  }, []);

  // جلب إعدادات الموقع
  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then(setSettings);
  }, []);

  // تغيير الشريحة كل 5 ثوانٍ
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // معالجة الرابط ليكون صحيحًا دائمًا
  const getImageUrl = (url: string) => {
    if (!url) return "/images/slide1.jpg";
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("/")) cleanUrl = "/" + cleanUrl;
    return encodeURI(cleanUrl);
  };

  if (slides.length === 0) {
    return <div className="w-full h-[400px] flex items-center justify-center">لا توجد شرائح للعرض حالياً</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden mt-28 md:mt-14">
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
      <div className="relative flex items-center justify-between w-full h-full">
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
          {/* القسم الأيسر: الصورة */}
          <div
            className="w-[350px] md:w-[550px] h-[400px] mx-auto bg-cover bg-center transition-all duration-700 rounded-3xl"
            style={{ backgroundImage: `url(${getImageUrl(slides[currentIndex].image)})` }}
          >
            {!slides[currentIndex].image && (
              <div className="text-red-600 text-center mt-10">لم يتم تحميل الصورة بشكل صحيح</div>
            )}
          </div>
          {/* القسم الأيمن: النص */}
          <div className="md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 text-center sm:text-right">
            <div className="rounded-2xl p-6 md:p-10 mx-auto md:mx-0 w-full max-w-xl flex flex-col items-center md:items-end  ">
              <h1 className="text-3xl md:text-5xl font-extrabold text-primaryColor mb-3 drop-shadow-lg leading-tight text-center md:text-right">
                {slides[currentIndex].title}
              </h1>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed text-center md:text-right">
                {slides[currentIndex].description}
              </p>
              {slides[currentIndex].buttonText && slides[currentIndex].buttonUrl && (
                <a
                  href={slides[currentIndex].buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primaryColor text-white px-7 py-2.5 rounded-lg font-bold text-lg shadow-md hover:bg-primaryColor/90 transition-all duration-200 mt-2 md:mt-0"
                >
                  {slides[currentIndex].buttonText}
                </a>
              )}
              {settings && settings.siteTitle && (
                <div className="mt-4 text-xs text-gray-500">{settings.siteTitle}</div>
              )}
            </div>
          </div>
        </div>
        {/* ازرار التحكم في الشرائح */}
        <div className="flex justify-between w-full absolute p-1">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-300 hover:text-gray-700 transition-all"
          >
            <FaArrowRight />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-300 hover:text-gray-700 transition-all"
          >
            <FaArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

// <div className="relative w-full h-screen overflow-hidden">
//   <div
//     className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700"
//     style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//   ></div>

//   <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

//   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//     <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentIndex].title}</h1>
//     <p className="text-lg md:text-2xl mb-8">{slides[currentIndex].description}</p>

//     <div className="flex justify-center gap-4">
//       <button
//         onClick={prevSlide}
//         className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-all"
//       >
//         <FaArrowRight />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-all"
//       >
//         <FaArrowLeft />
//       </button>
//     </div>
//   </div>
// </div>