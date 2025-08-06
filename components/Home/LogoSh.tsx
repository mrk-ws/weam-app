'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";

const logos = [
  '/images/logo4.jpg',
  '/images/logo2.png',
  '/images/logo3.svg',
  '/images/logo4.png'
];

const LogoSh = () => {
  return (
    <section className='py-20 w-full'>
      <div className="overflow-hidden py-6">
        <div className="relative flex whitespace-nowrap">
          <motion.div
            className="flex space-x-40"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="logo"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoSh
