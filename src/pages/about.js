
import Layout from '@/components/Layout';
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion';
// import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import AboutUs from '@/components/AboutUs';
import Image from "next/image";

const FramerImage = Image;

const Text = ({ img, title, summary, ndsummary, rdsummary }) => {
  return (
    <li className=" w-[100%] pb-5 col-span-1">
      <a className="w-full cursor-pointer inline-block overflow-hidden ">
        <FramerImage
          src={img}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </a>
      <h2 className="font-bold text-xl mt-16 text-2xl !text-navy dark:text-light w-full text-left mt-2 my-10 hover:underline xs:text-lg">
        {title}
      </h2>
      <p className="text-sm mb-2  !text-navy  w-[100%] m-auto dark:text-light">
        {summary}
      </p>
      <p className="text-sm mb-2  !text-navy  w-[100%] m-auto dark:text-light">
        {ndsummary}
      </p>
      <p className="text-sm mb-2  !text-navy  w-[100%] m-auto dark:text-light">
        {rdsummary}
      </p>
    </li>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>Tonde | About Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      {/* <TransitionEffect/> */}
      <main
        className="flex  min-h-screen xl:min-h-[50vh] m-0 items-cente w-full text-dark sm:items-start dark:text-light 2xl"
        style={{
          background: "url(../images/hero.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Layout
          className="bg-transparent text-light xl:min-h-[50vh] flex justify-center items-center  min-h-[100vh] rt:min-h-[100vh] 
         sm:min-h-[100vh]  xl:justify-start pt-2 md:pt-16 sm:pt-20 "
        >
          <div
            className="bg-transparent w-2/3 md:w-1/2 sm:w-full rt:w-full flex flex-col items-center mt-20 self-center lg:items-center  lg:w-full xl:w-2/3 
          lg:text-center xl:self-start lg:mt-40"
          >
            <AnimatedText
              text="Welcome to Wallasteve Auto & Mechanical Engineering"
              className="!text-5xl !text-center xl:!text-4xl lg:!text-center text-light lg:!text-3xl md:!text-2xl sm:!text-3xl 
              xs:mt-10 sm:mt-0 rt:mt-8"
            />
          </div>
        </Layout>
      </main>
      <maim className="!bg-light">
        <AboutUs className="!bg-light" />
        <Layout className="!bg-light">
          <ul className="flex gap-20">
            <Text
              title="Vision"
              summary="Our vision is to be the leading provider of automotive and mechanical engineering services in Zimbabwe, 
              while also being a model for corporate responsibility and social impact. We are committed to providing our 
              customers with the best possible experience, while also contributing to the development of our country. 
              We envision a future where Wallasteve Auto & Mechanical Engineering is known for its high-quality services, 
              its innovative products, and its commitment to social responsibility. We want to be a company that our customers
               can trust, and a company that our employees are proud to work for. "
              ndsummary="We also envision a future where Zimbabwe is a leader in the automotive and mechanical engineering 
              industry. We want to be a part of building a stronger and more prosperous Zimbabwe for all. We believe that our 
              vision is ambitious but achievable. We have a team of highly skilled and experienced employees, and we are 
              committed to providing our customers with the best possible experience."
              rdsummary="We are excited to see what the future holds for Wallasteve Auto & Mechanical Engineering. 
              We are confident that we can achieve our vision and make a positive impact on Zimbabwe."
            />{" "}
            <Text
              title="Mission"
              summary="Our mission is to provide high-quality automotive and mechanical engineering services to our customers,
               while also contributing to the development of the Zimbabwean economy. We believe that everyone deserves access to 
               reliable and affordable transportation. We also believe that the automotive and mechanical engineering industry is
                essential to the Zimbabwean economy."
              ndsummary="We are committed to providing our customers with the best possible experience and we are constantly 
              innovating to improve our services and products. We use only the best materials and equipment, and our employees 
              are highly skilled and experienced. We are also constantly training our employees on the latest technologies and 
              procedures."
              rdsummary="We are proud to be a leading provider of automotive and mechanical engineering services in Zimbabwe."
            />{" "}
          </ul>
          <ul className="flex gap-20">
            <Text
              title="Vision"
              summary="Our vision is to be the leading provider of automotive and mechanical engineering services in Zimbabwe, 
              while also being a model for corporate responsibility and social impact. We are committed to providing our 
              customers with the best possible experience, while also contributing to the development of our country. 
              We envision a future where Wallasteve Auto & Mechanical Engineering is known for its high-quality services, 
              its innovative products, and its commitment to social responsibility. We want to be a company that our customers
               can trust, and a company that our employees are proud to work for. "
              ndsummary="We also envision a future where Zimbabwe is a leader in the automotive and mechanical engineering 
              industry. We want to be a part of building a stronger and more prosperous Zimbabwe for all. We believe that our 
              vision is ambitious but achievable. We have a team of highly skilled and experienced employees, and we are 
              committed to providing our customers with the best possible experience."
              rdsummary="We are excited to see what the future holds for Wallasteve Auto & Mechanical Engineering. 
              We are confident that we can achieve our vision and make a positive impact on Zimbabwe."
            />{" "}
            <Text
              title="Mission"
              summary="Our mission is to provide high-quality automotive and mechanical engineering services to our customers,
               while also contributing to the development of the Zimbabwean economy. We believe that everyone deserves access to 
               reliable and affordable transportation. We also believe that the automotive and mechanical engineering industry is
                essential to the Zimbabwean economy."
              ndsummary="We are committed to providing our customers with the best possible experience and we are constantly 
              innovating to improve our services and products. We use only the best materials and equipment, and our employees 
              are highly skilled and experienced. We are also constantly training our employees on the latest technologies and 
              procedures."
              rdsummary="We are proud to be a leading provider of automotive and mechanical engineering services in Zimbabwe."
            />{" "}
          </ul>
        </Layout>
      </maim>
    </>
  );
}

export default about
