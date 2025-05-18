import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuHandCoins } from "react-icons/lu";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";



const Volunteer2 = () => {
  return (
    <div className='backg p-8 flex items-center justify-center'>

      <div className='flex items-center justify-center flex-col-reverse md:flex-row'>

        <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:w-1/2 font-semibold text-slate-50 p-2'>تطوع معنا وساهم في بناء مجتمع اكثر تعاون وتماسك</h2>
          <p className='mt-1 md:w-2/3 text-justify text-lg text-textColor p-2'>التطوع في مجال التنمية البشرية هو تجربة ثرية ومجزية، وتساعدك على تطوير ذاتك واكتساب مهارات جديدة. إذا كنت تبحث عن طريقة لإحداث فرق في العالم، فالتطوع في مجال التنمية البشرية هو خيار رائع.</p>
          <div className='flex gap-2 mt-6 w-full md:w-1/2'>

            <form className='flex flex-col gap-2 w-full '>
              <input className='rounded-md px-2  text-primaryColor' type="text" name="" placeholder='الاسم' id="" />
              <input className='rounded-md px-2  text-primaryColor' type="email" name="" placeholder='الايميل' id="" />
              <input className='rounded-md px-2  text-primaryColor' type="text" name="" placeholder='المجال التطوعي' id="" />
              <button className="rounded-md p-1 relative cursor-pointer flex items-center justify-center border border-primaryColor bg-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden">
                <span className="text-sm text-gray-200 font-semibold mr-10 md:mr-14 transform group-hover:translate-x-20 transition-all duration-300 ">
                  ارسل
                </span>
                <span className="absolute text-gray-200 -right-8 h-full w-10 rounded-lg bg-primaryColor flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <BsFillSendFill size={15}/>
                </span>
              </button>
            </form>

          

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
