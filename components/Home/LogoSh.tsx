'use client';
import React from 'react'
import { motion } from 'framer-motion';

const logos = [
  '/images/logo1.png',
  '/images/logo2.png',
  '/images/logo3.svg',
  '/images/logo4.svg',
  '/images/logo5.png',
  '/images/logo6.jfif',
  '/images/logo7.svg',
  '/images/logo8.svg',
];

const LogoSh = () => {
  return (
    <section className='py-20 w-full'>
      {/* <div className='flex w-full justify-between'>
        <Image src={'/images/logo1.png'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo2.png'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo3.svg'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo4.svg'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo5.png'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo6.jfif'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo7.svg'} alt='logo' height={100} width={100}/>
        <Image src={'/images/logo8.svg'} alt='logo' height={100} width={100}/>
      </div> */}
      <div className="overflow-hidden py-6">
        <div className="relative flex whitespace-nowrap">
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-16 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoSh
