import React from 'react'
import Layout from './Layout'
// import Link from 'next/link';
import Logo from './Logo';
import { LinkedInIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid !border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base  ">
      <Layout
        className="z-0 inline-block h-full w-full !bg-light p-20 dark:bg-dark xl:p-20 lg:p-16 
      md:p-12 sm:p-8 py-4 flex items-center justify-between lg:flex-col lg:py-6"
      >
        <Logo />
        <span>{new Date().getFullYear()}&copy; All Rigts Reserved.</span>
        <div className="flex w-[10%]">
          <motion.a
            href="https://twitter.com"
            targert={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            targert={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            targert={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            targert={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-16"
          >
            <LinkedInIcon />
          </motion.a>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer
