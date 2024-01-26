import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import project1 from "../../public/images/logo.png";
import Image from "next/image";

const FramerImage = motion(Image);
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-16 bg-light text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold"
        whileHover={{
          backgroundColor: ["#dfdfdfa6", "#aeaeaea6", "#e2e3ffa6", "#8c8c8ca6"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <FramerImage
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          src={project1}
          className="z-10 w-96 h-auto  rounded-lg"
        />
      </MotionLink>
    </div>
  );
}

export default Logo