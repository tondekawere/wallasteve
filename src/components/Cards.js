import { motion } from 'framer-motion';
import React from 'react'
import { useRouter } from "next/router";
import article1 from "../../public/images/c1.png";
import prof from "../../public/images/prof.png";
import article2 from "../../public/images/c2.png";
import article3 from "../../public/images/c3.png";
const FramerImage = motion(Image);
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";





const FirstCards = ({ img, title, price, summary, link, but }) => {
    const router = useRouter();
  return (
    <li className=" w-[95%] ml-2  pb-5 col-span-1 !bg-light border  text-center dark:bg-dark  dark:border-light !border-navy border-solid">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer inline-block overflow-hidden "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank" className="">
        <h2 className="font-bold mt-16 text-1xl text-center !text-navy dark:text-light w-full text-left mt-2 my-3 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2  !text-navy  w-[80%] m-auto dark:text-light">
        {summary}
      </p>
      <Link
        href="/about"
        className="absolute top-2 left-2 text-sm font-medium capitalize !text-primary dark:text-primaryDark  hover:underline underline-offset-2 bg-light p-2 px-3"
      >
        {price}
      </Link>
      <Link
        href="/about"
        className="text-md font-medium capitalize !text-primary dark:text-primaryDark  hover:underline underline-offset-2"
      >
        {but}
      </Link>
    </li>
  );
};

const ProfileCard = ({ img, name, position, link }) => {
  return (
    <li className="relative rounded-xl w-[90%] pb-5 col-span-1 !bg-light border  text-center dark:bg-dark" >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer inline-block overflow-hidden "
      >
        <FramerImage
          src={img}
          className="w-full h-[200px] object-cover object-top bg-navy rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <h4 className="text-navy my-2 font-bold font-sans">{name}</h4>
      <h6 className="text-navy font-light text-sm">{position}</h6>
    </li>
  );
};

const Wrapped = styled.section`
 
`;

export const Profiles = () => {
  return (
    <Wrapped className="p-20 xl:pt-5 xs:p-5 lg:pb-10">
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },

        }}
        className="mySwiper gap-9 z-0 pb-5"
      >
        <ul className="gap-2">
          <SwiperSlide className=" ml-0 ">
            <ProfileCard
              link="/"
              target="_blank"
              img={prof}
              name=" Wallas Stephan Nyawumwe"
              position="Founder & Lead Engineer"
            />
          </SwiperSlide>
          <SwiperSlide className="ml-0  ">
            <ProfileCard
              link="/"
              target="_blank"
              img={prof}
              name=" Wallas Stephan Nyawumwe"
              position="Founder & Lead Engineer"
            />
          </SwiperSlide>
          <SwiperSlide className=" ml-0 ">
            <ProfileCard
              link="/"
              target="_blank"
              img={prof}
              name=" Wallas Stephan Nyawumwe"
              position="Founder & Lead Engineer"
            />
          </SwiperSlide>
          <SwiperSlide className=" ml-0 ">
            <ProfileCard
              link="/"
              target="_blank"
              img={prof}
              name=" Wallas Stephan Nyawumwe"
              position="Founder & Lead Engineer"
            />
          </SwiperSlide>
         
        </ul>
      </Swiper>
    </Wrapped>
  );
}

const Cards = () => {
  return (
    <div className="p-20 pb-0 pt-10 xs:px-5 xs:pt-3">
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper z-0"
      >
        <ul className="z-0">
          <SwiperSlide>
            <FirstCards
              title="Engine overhaul"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article1}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Brakes"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article2}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Fix and supply"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article3}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Fix and supply"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article3}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FirstCards
              title="Engine overhaul"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article1}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Brakes"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article2}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Fix and supply"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article3}
              but="View more"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FirstCards
              title="Fix and supply"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              price="From $30"
              link="/"
              img={article3}
              but="View more"
            />
          </SwiperSlide>
        </ul>
      </Swiper>
      <button className="bg-navy p-3 px-5 text-light float-right hover:underline underline-offset-2 hover:text-navy hover:bg-transparent hover:border hover:border-5 hover:border-navy text-sm rounded mt-5">
        VIEW MORE
      </button>
    </div>
  );
}

export default Cards