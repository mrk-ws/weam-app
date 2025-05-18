import DisclosurePage from '@/app/legal/DisclosurePage'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "وئام لتنمية الأيتام - الحوكمة",
  description: "جمعية وئام للتنمية البشرية للأيتام | نسعى لتمكين الايتام واسرهم لتأهيلهم لسوق العمل",
};


const page = () => {
  return (
    <div className='h-[200vh]'>
      <DisclosurePage/>
    </div>
  )
}

export default page
