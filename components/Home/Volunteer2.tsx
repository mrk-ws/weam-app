import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdOutlineVolunteerActivism } from "react-icons/md";



const Volunteer2 = () => {
  return (
    <div className='backg p-8 flex items-center justify-center'>

      <div className='flex items-center justify-center flex-col-reverse md:flex-row'>

        <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:w-1/2 font-semibold text-slate-50 p-2'>تطوع معنا وساهم في بناء مجتمع اكثر تعاون وتماسك</h2>
          <p className='mt-1 md:w-2/3 text-justify text-lg text-textColor p-2'>التطوع في مجال التنمية البشرية هو تجربة ثرية ومجزية، وتساعدك على تطوير ذاتك واكتساب مهارات جديدة. إذا كنت تبحث عن طريقة لإحداث فرق في العالم، فالتطوع في مجال التنمية البشرية هو خيار رائع.</p>
          <div className='flex gap-2 mt-6 w-full md:w-1/2'>

            <Link
              href={'https://nvg.gov.sa/public/ent-prov/detail/e2aa4a75-1a3c-41ef-3a9a-08dcd097aea5'} 
              target="blank"
              className="rounded-lg relative w-full h-10 cursor-pointer flex items-center justify-center border border-white group hover:scale-110 hover:bg-primaryColor hover:border-primaryColor active:bg-primaryColor active:border-primaryColor transition-all duration-300 overflow-hidden"
            >
              <span
                className="text-gray-200 font-semibold mr-20 transform group-hover:translate-x-72 transition-all duration-500">
                  تطوع
              </span>
              <span
                className="absolute text-gray-200 h-full w-10 rounded-lg flex items-center justify-center transform group-hover:scale-110  transition-all duration-300"
              >
                                        <MdOutlineVolunteerActivism size={25} />
            
              </span>
            </Link>
          

          </div>
        </div>

        <div>
          <Image className='ml-10' src={'/images/Volunteer2.png'} width={800} height={800} alt='ff'/>
        </div>

      </div>

    </div >
  )
}

export default Volunteer2
