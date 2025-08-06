"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    image: "/images/p2.png",
    badge: "سوق",
    title:
      "مبادرة شاملة لتمكين الأيتام اقتصادياً وتزويدهم بالمهارات والمعرفة اللازمة لانشاء مشاريعهم الخاصة.",
    link: "/programs/program1",
  },
  {
    image: "/images/slide2.jpg",
    badge: "جدارة وتفوق",
    title:
      "رفع المستوى الاكاديمي للأيتام وتأهيلهم للتفوق في الاختبارات التحصيلية والقدرات من خلال توفير دروس تقوية.",
    link: "/programs/program1",
  },
  {
    image: "/images/slide3.jpg",
    badge: "إسهام",
    title:
      "تمكين الأيتام وتأهيلهم ليكونوا قادة المستقبل من خلال برامج تدريبية وتنموية متخصصة مع الجهات ذات العلاقة.",
    link: "/programs/program1",
  },
  {
    image: "/images/slide4.jpg",
    badge: "رفاق",
    title:
      "تمكين الأيتام وتطوير شخصياتهم من خلال الإنخراط في برامج تربوية ونوادي تطوعية.",
    link: "/programs/program1",
  },
  {
    image: "/images/p1.jpg",
    badge: "مطمئن",
    title:
      "دعم الأيتام وأسرهم نفسياً واجتماعياً من خلال توفير جلسات إرشاد نفسي وأسري وورش توعية.",
    link: "/programs/program1",
  },
  {
    image: "/images/p7.jpg",
    badge: "واعي",
    title:
      "دمج الأيتام في المجتمع وتوسيع دائرة علاقاتهم من خلال تنفيذ برامج توعوية و اجتماعية متنوعة",
    link: "/programs/program1",
  },
  {
    image: "/images/p12.jpg",
    badge: "الحج والعمرة",
    title:
      "تمكين الأيتام المكلفين من اداء فريضة الحج والعمرة بالشراكة مع جهات ذات العلاقة",
    link: "/programs/program1",
  },
  {
    image: "/images/p8.jpg",
    badge: "مؤهل",
    title:
      "دعم الأيتام المتفوقين اكاديمياً وتمكينهم في مواصلة دراساتهم العليا من خلال تقديم برامج دراسية شاملة بالشراكة مع الجهات ذات العلاقة",
    link: "/programs/program1",
  },
  {
    image: "/images/p6.jpg",
    badge: "ترفية",
    title:
      "بناء مجتمع مترابط من خلال تنظيم انشطة ترفيهية وثقافية اجتماعية للأيتام واسرهم وتعزيز شعورهم بالانتماء والمشاركة ",
    link: "/programs/program1",
  },
  {
    image: "/images/p3.jpg",
    badge: "قارئ",
    title:
      "تنمية الجانب الثقافي والمعرفي لدى الأيتاممن خلال توفير بيئة محفزة للقراءة والمعرفة وتشجيعهم على الانخراط في الانشطة الثقافية والعلمية ",
    link: "/programs/program1",
  },
  {
    image: "/images/p11.jpg",
    badge: "تطوع",
    title:
      "اشراك الايتام في العمل التطوعي وتعزيز قيم العطاء والمشاركة المجتمعية من خلال تنظيم برامج تطوعية متنوعة",
    link: "/programs/program1",
  },
  {
    image: "/images/p4.jpg",
    badge: "ريادة",
    title:
      "تمكين الأيتام اقتصاديا من خلال توفير الدعد والتدريب اللازمين لبدء مشاريعهم الخاصة مع التركيز على تطوير مهاراتهم الرياديةعزيز ثقتهم بأنفسهم",
    link: "/programs/program1",
  },
  {
    image: "/images/p10.jpg",
    badge: "نادي",
    title:
      "توفير بيئة آمنة وممتعة للأيتام لاستغلال اوقات فراغهم في انشطة رياضية وتعليمية وترفيهية تساهم في تطوير شخصياتهم ومهاراتهم",
    link: "/programs/program1",
  },
  {
    image: "/images/p5.jpg",
    badge: "مهارة",
    title:
      "مساعدة الأيتام على تحديد ميولهم المهني وتحديد مسارهم المستقبلي من خلال تقييمات مهنية متخصصة وتوجيههم نحو الفرص المناسبة وتقديم الاستشارات الفردية",
    link: "/programs/program1",
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section id="3" className="py-12 px-6">
      <div className="container mx-auto text-center bg-transparent">
        <h2 className="text-3xl font-bold mb-8">برامجنا</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          // إضافة خاصية Autoplay وتحديد التأخير بـ 3000 ملي ثانية (3 ثواني)
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="pb-10"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-100 group hover:border-primeryColor border relative hover:bg-slate-200 duration-300 dark:bg-darkTheme3 hover:dark:bg-darkTheme2 transition-all rounded-xl h-[500px] shadow-md overflow-hidden p-8 flex flex-col items-center">
                <Image
                  src={program.image}
                  alt={program.badge}
                  width={300}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <p className="mt-4 text-lg font-semibold text-primeryColor">
                  {program.badge}
                </p>
                <h5 className="mt-2 text-md font-mediumtext-center">
                  {program.title}
                </h5>
                <Link
                  href={program.link}
                  className="mt-4 absolute bottom-6 right-6 border group-hover:scale-110 bg-primaryColor text-white it px-2 py-1 text-sm group-hover:font-semibold dark:border-none rounded-lg hover:bg-gray-700 transition"
                >
                  المزيد
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button-Atrrangment w-full flex justify-center items-center mt-6">
          <div className="button-swiper w-full">
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
