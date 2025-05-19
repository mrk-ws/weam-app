"use client"
import ThemeToggle from "@/components/global/ThemeMode";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuHandCoins } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { Links } from './data'
import { GeneralSettings } from "@/types/settings";

const Navbar = ({ settings }: { settings?: GeneralSettings }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [siteTitle, setSiteTitle] = useState<string>("");
  const [logoUrl, setLogoUrl] = useState<string>("");

  useEffect(() => {
    if (settings) {
      setSiteTitle(settings.siteName || "");
      setLogoUrl(settings.logoUrl || "/logo-hed.png");
    } else {
      setSiteTitle("");
      setLogoUrl("/logo-hed.png");
    }
    // eslint-disable-next-line
  }, [settings]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav
      className={`bg-slate-100 dark:bg-darkTheme3 flex fixed top-0 left-0 w-full  transition-transform duration-500 z-50 ${isVisible ? "translate-y-0" : "-translate-y-full "
        }`}
    >
      <div onClick={() => setToggleMenu(!toggleMenu)} className={`${toggleMenu ? "left-[750px]" : "left-0"} md:hidden w-full transition-all duration-200 delay-200 bg-menuOverlay  absolute h-screen bottom-0 top-0`}></div>

      <div className=" container mx-auto p-4  flex items-center justify-between">
        {/*===== LOGO  =====*/}
        <Link href={'/'} className="flex items-center">
          <Image className="w-14 sm:w-24" alt="logo" src={logoUrl || "/logo-hed.png"} width={64} height={64} />
          <div className="flex flex-col justify-center items-center -mr-4">
            <h1 className="text-textColor dark:text-gray-100 font-semibold sm:font-medium text-[0.7rem] sm:text-lg">{siteTitle || "جمعية وئام للتنمية البشرية للأيتام"}</h1>
            <p className="text-moveColor font-extrabold text-[0.4rem] sm:text-[0.6rem]">Weam Association for Human Development for Orphans</p>
            <b className="text-primaryColor text-[0.4rem] sm:text-sm">رقم الترخيص 1000624300</b>
          </div>
        </Link>
        {/*=============== MENU  ===============*/}
        <div className="hidden lg:flex mx-auto items-center justify-center xl:gap-10 lg:gap-8 ">
         {Links.map(link =>
          <Link 
            key={link.nm} 
            href={link.url}
            className="dark:text-slate-100 text-textColor font-semibold text-lg">
              {link.title}
          </Link>
         )}
        </div>
        {/*=============== BTN  ===============*/}
        <div className="flex items-center">
          <div className="flex items-center gap-1 sm:gap-4 lg:gap-6">
            <Link href={'https://store.weam.org.sa/'} target="blank">
            
              <button
                className="pl-1 rounded-md md:h-10 relative w-16 md:w-20 cursor-pointer flex items-center border border-primaryColor bg-primaryColor group hover:bg-primaryColor active:bg-primaryColor active:border-primaryColor overflow-hidden"
              >
                <span
                  className="text-gray-200 font-semibold mr-8 transform group-hover:translate-x-20 transition-all duration-300">تبرع</span>
                <span
                  className="absolute text-gray-200 right-0 h-full w-8 rounded-lg bg-primaryColor flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                >
                  <LuHandCoins size={20} />

                </span>
              </button>             
            </Link>
             <ThemeToggle />
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block lg:hidden"><IoMenu className="text-gray-600 dark:text-gray-100" size={35} /></button>
          </div>

        </div>

        <div className={`${toggleMenu ? "-right-[640px]" : "right-0 bottom-0"} bg-primaryColor transition-all duration-500 delay-200 w-[300px] h-screen top-0 bottom-0 px-4 py-16 absolute z-10`}>
          <div className=" absolute top-4 right-4">
            <IoCloseCircle onClick={() => setToggleMenu(!toggleMenu)} size={30} className="text-red-400 hover:text-red-500 cursor-pointer" />
          </div>

          <div >
            <ul className="w-full flex flex-col gap-2">

              {Links.map(link =>
                <Link 
                  onClick={() => setToggleMenu(!toggleMenu)}
                  key={link.nm} 
                  href={link.url}
                  className="border-b  p-3 text-gray-100 hover:text-gray-300">
                    {link.title}
                </Link>
            )}
            </ul>
            
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
