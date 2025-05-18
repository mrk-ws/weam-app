'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowButton(false);
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 z-30 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
}
