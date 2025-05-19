import Link from 'next/link'
import React from 'react'
import { LuHandCoins } from "react-icons/lu";
import { MdOutlineVolunteerActivism } from "react-icons/md";



const Volunteer = () => {
    return (
        <div className='backg h-[50vh] flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-semibold text-slate-50'>دعمك اليوم يصنع قادة الغد</h2>
            <p className='mt-2 md:w-1/3 text-center text-textColor'>التبرع يأتي بأشكال متنوعة، من المال إلى الوقت والمهارات، ودعونا نختار ما يناسبنا للمشاركة في هذا العطاء العظيم.</p>
            <div className='flex gap-2 mt-6'>

                {/* <button className='font-semibold bg-primaryColor rounded-md px-3 py-1 hover:-translate-y-1 duration-200'>
                    <Link className='flex items-center gap-1' target='blank' href={"https://store.weam.org.sa/"}>
                    <LuHandCoins size={20}/>
                        تبرع
                    </Link>
                </button>
                <button className='font-semibold border px-3 py-1 rounded-md hover:-translate-y-1 duration-200 border-primaryColor'>
                    <Link className='flex items-center gap-1' target='blank' href={""}>
                        تطوع
                        <MdOutlineVolunteerActivism size={20} />
                    </Link>
    </button> */}
<Link 
  href={'https://store.weam.org.sa/'} 
  target="blank"
  className="rounded-lg relative w-28 h-10 cursor-pointer flex items-center border border-primaryColor bg-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden"
>
  <span
    className="text-gray-200 font-semibold mr-12 transform group-hover:translate-x-20 transition-all duration-300">تبرع</span>
  <span
    className="absolute text-gray-200 right-0 h-full w-10 rounded-lg bg-primaryColor flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
                    <LuHandCoins size={25}/>

  </span>
</Link>
<button
  className="rounded-lg relative w-28 h-10 cursor-pointer flex items-center border border-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden"
>
  <span
    className="text-gray-200 font-semibold mr-10 transform group-hover:translate-x-20 transition-all duration-300">تطوع</span>
  <span
    className="absolute text-gray-200 right-0 h-full w-10 rounded-lg flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
                            <MdOutlineVolunteerActivism size={25} />

  </span>
</button>

            </div>
        </div >
  )
}

export default Volunteer
