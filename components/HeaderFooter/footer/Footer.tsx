import React from 'react';

interface FooterProps {
  settings?: any;
}

const Footer = ({ settings }: FooterProps) => {
  const year = new Date().getFullYear();
  const siteTitle = settings?.siteName || 'جمعية وئام للتنمية البشرية للأيتام';
  return (
    <div className='bg-slate-100 dark:bg-darkTheme3 p-4 relative'>
      <p className='text-center font-semibold text-lg'>جميع الحقوق محفوظة © {year} {siteTitle}</p>
      <a href={'https://my-to.site'} target='blank' className='text-[10px] absolute bottom-1 right-1'>Developed by My to site builder | webdesing.llc</a>
    </div>
  );
};

export default Footer;
