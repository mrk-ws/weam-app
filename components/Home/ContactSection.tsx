'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section id="9" className="backg py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto  p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">تواصل معنا</h2>

        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Contact Info */}
          <div dir='ltr' className='border rounded-2xl p-2 md:p-4'>
            <a href='tel:+966 50 776 6675' className="flex items-center justify-end space-x-2 md:space-x-4 mb-4">
              <span className="text-gray-700">+966 50 776 6675</span>
              <FaPhone className="text-gray-200 text-xl" />
            </a>
            <a href='mailto:info@weam.org.sa' className="flex items-center justify-end space-x-2 md:space-x-4 mb-4">
              <span className="text-gray-700">info@weam.org.sa</span>
              <FaEnvelope className="text-gray-200 text-xl" />
            </a>
            <div className="flex items-center justify-end space-x-2 md:space-x-4 mb-4">
              <span className="text-gray-700">فاطمه بنت اسد، الاجواد، جدة 23466</span>
              <FaMapMarkerAlt className="text-gray-200 text-xl" />
            </div>
            <div dir='ltr' className="flex items-center justify-end space-x-4 mt-4 ">
              <a href="https://www.facebook.com/weam.org/" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaFacebook /></a>
              <a href="https://x.com/weam_org" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaSquareXTwitter /></a>
              <a href="https://www.instagram.com/weam_org" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaInstagram /></a>
              <a href="#" className="hover:-translate-y-[2px] duration-200">
                <Image width={18} height={18} src="/images/jaco-sv1.svg" alt="fg" />
              </a>
              <a href="https://wa.me/+966507766675" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaWhatsapp /></a>
              <a href="https://www.tiktok.com/@weam_org" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaTiktok /></a>
              <a href="https://www.snapchat.com/add/weam_org" className="text-gray-200 text-xl hover:-translate-y-[5px] duration-200"><FaSnapchatGhost /></a>
            </div>
            {/* Google Map Embed */}
            <div className="max-w-4xl mx-auto mt-8">
              <iframe
                className="w-full h-64 rounded-2xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.8386115461774!2d39.26559007477968!3d21.60863797267149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d50052c946d7%3A0x36399fb9e1a2fbe3!2z2KzZhdi52YrYqSDZiNim2KfZhSDZhNmE2KrZhtmF2YrYqSDYp9mE2KjYtNix2YrYqSDZhNmE2KPZitiq2KfZhQ!5e0!3m2!1sar!2ssa!4v1738658915346!5m2!1sar!2ssa"
                allowFullScreen
                loading="lazy"
              ></iframe>

            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="رسالتك"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 h-60"
              required
            ></textarea>
            <button type="submit" className="w-full  bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">إرسال</button>
          </form>
        </div>
      </div>


    </section>
  );
}
