import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <section id="2" className="info">
        <h2 className="text-3xl font-semibold text-center mx-auto py-16 ">عن وئام</h2>
        <div className="flex p-5 flex-col-reverse md:flex-row items-center justify-center mx-auto md:-mt-24">
          <div className="right  md:w-1/2">
            <div className="top p-4 shadow-md rounded-lg dark:bg-darkTheme3">
              <div className="fltur">
                <h2 className='font-semibold text-primeryColor'>قصتنا</h2>
                <p className='text-justify'>
                  في مجتمع متكامل تسوده روح التكافل لتحقيق الأثر الإيجابي
                  المستدام في حياة الأيتام واسرهم ولكون الإستثمار في رأس المال
                  البشري هي احدى مرتكزات رؤية 2030
                </p>
                {/* <!-- <img src="assets/img/info/Saudi_Vision_2030_logo.svg.png" alt=""/> --> */}
                <p className='text-center my-2 text-primeryColor'><b>تأسست جمعية وئام للتنمية البشرية الأيتام</b></p>
                <p className='text-justify'>
                  تحت إشراف المركزالوطني لتنمية القطاع غير الربحي بترخيص رقم
                  <i>(1000624300)</i> برؤية واضحة نحو تحسين جودة حياة الأيتام
                  وأسرهم , من خلال تقديم خدمات متكاملة تضمن لم الاستدامة
                  والتطوير في مختلف مجالات الحياة وتوفير بيئة داعمة ليصبحوا
                  شركاء فعالين في المجتمع.
                </p>
              </div>
            </div>
            <div className="bott mt-5 md:p-4 md:flex gap-2 ">
              <div className="rounded-lg shadow-md p-2 dark:bg-darkTheme3">
                <h3 className="font-semibold text-primeryColor">رؤيتنا</h3>
                <p className="bott_info">
                  نسعى لإستدامة جودة الحياة والتمكين لليتيم وأسرته.
                </p>
                <br />
                <h3 className="font-semibold text-primeryColor">رسالتنا</h3>
                <p className="bott_info">
                  نحرص على رضا ورفاهية اليتيم واسرته من خلال خدمات رعوية وتنموية
                  شاملة ومستدامة.
                </p>
                <br />
              </div>
              <div className="rounded-lg shadow-md p-2 dark:bg-darkTheme3 mt-4">
                <h3 className="font-semibold text-primeryColor">قيمنا</h3>
                <ul>
                  <p>
                    تعبر مبادراتنا النوعية بأساليب مبتكرة وشركاء فعالين لتحقيق
                    طموحات اليتيم واسرته.
                  </p>
                  <br />
                  <ul className="flex flex-wrap my-4 gap-4">
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> الإستدامة</li>
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> التمكين</li>
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> الابتكار</li>
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> الشمولية</li>
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> الشفافية</li>
                      <li className='p-2 bg-slate-100 dark:bg-darkTheme2 rounded-md cursor-pointer hover:bg-slate-200 transition-all hover:-translate-y-1 duration-200'> المسؤلية</li>
                  
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="left md:w-1/2">
            <div className="im">
              <Image src={'/images/info.png'} width={1000} height={1000} className='w-full h-auto' alt='info'/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Info
