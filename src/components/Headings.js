import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Heading = ({ text, className = "" }) => {
  return (
    <div className="py-2  sm:py-0 w-full mx-auto flex items-center justify-center  text-center overflow-hidden">
      <motion.h2
        className={`inline-block w-full !text-navy dark:text-light font-bold capitalize lg:text-4xl text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default Heading;
