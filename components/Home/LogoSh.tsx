'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";

const logos = [
  '/images/logo4.jpg',
  '/images/logo2.png',
  '/images/logo3.svg'
];

const LogoSh = () => {
  return (
    <section className='py-20 w-full'>
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
              <Image
                key={index}
                src={logo}
                alt="logo"
                width={100}
                height={64}
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
