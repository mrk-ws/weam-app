import Image from "next/image";
import { FaBullseye, FaEye, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto  p-6 mt-28">
      {/* Section: Image */}
      <div className="w-full mx-auto">
        <Image src="/images/banr3.jpg" alt="About Us"  width={1000} height={1000} className="mx-auto rounded-lg" />
      </div>

      {/* Section: About */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-center text-primeryColor">نبذة عنا</h2>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-200">نحن جمعية متخصصة في تقديم الحلول المبتكرة لمجالات التنمية البشرية للأيتام</p>
      </section>

      {/* Section: Story */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-center text-primeryColor">قصتنا</h2>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-200">
                  في مجتمع متكامل تسوده روح التكافل لتحقيق الأثر الإيجابي
                  المستدام في حياة الأيتام واسرهم ولكون الإستثمار في رأس المال
                  البشري هي احدى مرتكزات رؤية 2030</p>
      </section>

      {/* Section: Establishment Date */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-center text-primeryColor">تأسست جمعية وئام للتنمية البشرية الأيتام</h2>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-200">
                  تحت إشراف المركزالوطني لتنمية القطاع غير الربحي بترخيص رقم
                  <i>(1000624300)</i> برؤية واضحة نحو تحسين جودة حياة الأيتام
                  وأسرهم , من خلال تقديم خدمات متكاملة تضمن لم الاستدامة
                  والتطوير في مختلف مجالات الحياة وتوفير بيئة داعمة ليصبحوا
                  شركاء فعالين في المجتمع.
                  </p>
      </section>

      {/* Section: Goals, Mission, Vision */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <FaBullseye className="text-4xl mx-auto text-blue-500" />
          <h3 className="text-xl font-semibold mt-4">أهدافنا</h3>
          <p className="mt-2 text-gray-600">تأهيل وتدريب وتمكين الأيتام ليصبحوا فعالين في المجتمع ويشتركون في بناء الوطن</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <FaRocket className="text-4xl mx-auto text-green-500" />
          <h3 className="text-xl font-semibold mt-4">رسالتنا</h3>
          <p className="mt-2 text-gray-600">
                  نحرص على رضا ورفاهية اليتيم واسرته من خلال خدمات رعوية وتنموية
                  شاملة ومستدامة.
                  </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <FaEye className="text-4xl mx-auto text-purple-500" />
          <h3 className="text-xl font-semibold mt-4">رؤيتنا</h3>
          <p className="mt-2 text-gray-600">نسعى لإستدامة جودة الحياة والتمكين لليتيم وأسرته والعيش برافهيه تحقق لهم جميع متطلباتهم.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
