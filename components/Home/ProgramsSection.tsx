'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    image: '/images/slide1.jpg',
    badge: 'سوق',
    title: 'مبادرة شاملة لتمكين الأيتام اقتصادياً وتزويدهم بالمهارات والمعرفة اللازمة لانشاء مشاريعهم الخاصة.',
    link: '/programs/program1',
  },
  {
    image: '/images/slide2.jpg',
    badge: 'جدارة وتفوق',
    title: 'رفع المستوى الاكاديمي للأيتام وتأهيلهم للتفوق في الاختبارات التحصيلية والقدرات من خلال توفير دروس تقوية.',
    link: '/programs/program2',
  },
  {
    image: '/images/slide3.jpg',
    badge: 'إسهام',
    title: 'تمكين الأيتام وتأهيلهم ليكونوا قادة المستقبل من خلال برامج تدريبية وتنموية متخصصة مع الجهات ذات العلاقة.',
    link: '/programs/program3',
  },
  {
    image: '/images/slide4.jpg',
    badge: 'رفاق',
    title: 'تمكين الأيتام وتطوير شخصياتهم من خلال الإنخراط في برامج تربوية ونوادي تطوعية.',
    link: '/programs/program4',
  },
  {
    image: '/images/slide1.jpg',
    badge: 'مطمئن',
    title: 'دعم الأيتام وأسرهم نفسياً واجتماعياً من خلال توفير جلسات إرشاد نفسي وأسري وورش توعية.',
    link: '/programs/program5',
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section id='3' className="py-12 px-6">
      <div className="container mx-auto text-center bg-transparent">
        <h2 className="text-3xl font-bold mb-8">برامجنا</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-100 group hover:border-primeryColor border relative hover:bg-slate-200 duration-300 dark:bg-darkTheme3 hover:dark:bg-darkTheme2 transition-all rounded-xl h-[500px] shadow-md overflow-hidden p-8 flex flex-col items-center">
                <Image src={program.image} alt={program.badge} width={300} height={200} className="rounded-lg" />
                <p className="mt-4 text-lg font-semibold text-primeryColor">{program.badge}</p>
                <h5 className="mt-2 text-md font-medium  text-center">{program.title}</h5>
                <Link href={program.link} className="mt-4 absolute bottom-6 right-6 border group-hover:border-primeryColor group-hover:bg-slate-50 group-hover:text-primeryColor bg-primeryColor text-white it px-2 py-1 text-sm group-hover:font-semibold dark:border-none rounded-lg hover:bg-gray-700 transition">
                  المزيد
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='button-Atrrangment'>
          <div className='button-swiper'>
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
