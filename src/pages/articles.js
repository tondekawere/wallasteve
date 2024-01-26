
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
// import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const articles = () => {
  return (
    <>
      <Head>
        <title>Tonde | Articles Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      {/* <TransitionEffect/> */}
        <main
        className="flex  min-h-[50vh] xl:min-h-[50vh] m-0 items-center bg-navy w-full text-dark sm:items-start dark:text-light 2xl"
        style={{
          background: "url(../images/banner.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Layout
          className="bg-trans text-light xl:min-h-[50vh] flex justify-center items-center  xl:min-h-[100vh] rt:min-h-[100vh] 
         sm:min-h-[100vh]  xl:justify-start pt-2 md:pt-16 sm:pt-20 "
        >
          <div
            className="bg-trans w-2/3 md:w-1/2 sm:w-full rt:w-full flex flex-col items-center mt-20 self-center lg:items-center  lg:w-full xl:w-2/3 
          lg:text-center xl:self-start lg:mt-40"
          >
            <AnimatedText
              text="Welcome to Wallasteve Auto & Mechanical Engineering"
              className="!text-4xl !text-center xl:!text-4xl lg:!text-center text-light lg:!text-3xl md:!text-2xl sm:!text-3xl 
              xs:mt-10 sm:mt-0 rt:mt-8"
              
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default articles;
