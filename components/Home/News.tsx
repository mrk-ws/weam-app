import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "إطلاق برنامج جديد في الجمعية",
    description: "أعلنت الجمعية عن إطلاق برنامجها الجديد الذي سيحدث ثورة في المجال التنموي...",
    image: "/images/news.png",
    link: "#",
  },
  {
    id: 2,
    title: "تحديثات جديدة على التطبيق",
    description: "تحديث جديد يجلب ميزات مذهلة لتحسين تجربة المستخدم...",
    image: "/images/news.png",
    link: "#",
  },
  {
    id: 3,
    title: "توسع الجمعية في المنطقة المحلية",
    description: "خطط جديدة للتوسع في مناطق جديدة خلال العام المقبل...",
    image: "/images/news.png",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section id="8" className="py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          آخر الأخبار
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="overflow-hidden rounded-2xl shadow-lg bg-white">
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
                <p className="text-gray-600 mt-2">{news.description}</p>
                <a href={news.link} className="mt-4 block text-center bg-primeryColor text-white py-2 rounded-md">
                  اقرأ المزيد
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
