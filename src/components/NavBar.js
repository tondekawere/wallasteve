import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from "./Logo";
import { motion } from 'framer-motion';
// import { dark } from '@mui/material/styles/createPalette';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => { 
const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute  dark:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => { 
const router = useRouter();
const handleClick = () => {
  toggle();
  router.push(href)
}
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute  dark:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
 
  const [mode, setMode] = useThemeSwitcher( );
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full absolute bg-light flex items-center justify-between px-32 py-4 text-navy font-medium z-10 dark:text-navy lg:px-16  z-1 md:px-12 sm:px-8 ">
      <div className=" hidden lg:block self-start">
        <Logo />
      </div>
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out opacity-100 my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <div className="">
          <Logo />
        </div>
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4  rounded relative group lg:text-navy dark:text-navy "
          />
          <CustomLink href="/about" title="About" className="mx-4 " />
          <CustomLink href="/projects" title="Services" className="mx-4" />
          <CustomLink href="/projects" title="Gallery" className="mx-4" />
          <CustomLink href="/articles" title="Contact" className="ml-4" />
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] z-30 flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md "
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mr-4  rounded relative group  text-light dark:text-dark "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}

export default NavBar