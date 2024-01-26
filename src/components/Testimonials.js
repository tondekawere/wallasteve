import React from 'react'
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/pro.jpeg"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Paragraphs from './Paragraphs';

const FramerImage = Image;

const Text = ({ img, name, summary, link, but }) => {
  return (
    <li className=" w-[95%] ml-2  pb-5 col-span-1 !bg-light border  text-center dark:bg-dark  dark:border-light !border-dark border-solid">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer inline-block overflow-hidden "
      >
        <FramerImage
          src={img}
          alt={name}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank" className="">
        <h2 className="font-bold text-xl mt-16 text-1xl text-center !text-navy dark:text-light w-full text-left mt-2 my-3 hover:underline xs:text-lg">
          {name}
        </h2>
      </Link>
      <p className="text-sm mb-2  !text-navy  w-[80%] m-auto dark:text-light">
        {summary}
      </p>
      <Link
        href="/about"
        className="text-sm font-medium capitalize !text-gold dark:text-goldD  hover:underline underline-offset-2"
      >
        {but}
      </Link>
    </li>
  );
};

const Testimonials = () => {
    return (
      <div className="p-20 xs:px-5 pt-10 bg-navy[50%] bg-gray-100 pb-10">
        <h2 className='text-4xl text-navy text-center'>Testimonials</h2>
        <Paragraphs className="!text-sm !w-2/3 xs:!w-[100%] !my-9" 
        text="At Wallasteve Auto & Mechanic Engineering, our team is comprised of passionate individuals who are experts in their respective fields. With a shared love for automotive engineering and design, we collaborate seamlessly to deliver exceptional results. Get to know the talented individuals who make up our team:"/>
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
          <ul className="z-0">
            <SwiperSlide className=" ml-0 ">
              <Text
                name="Charles Dube"
                summary=" Whether it's a sumptuous Thanks giving feast or a vibrant Lunar New Year spread, food brings people together and serves as a powerful symbol of unity and heritage."
                link="/"
                img={article1}
                but="Read more"
              />{" "}
            </SwiperSlide>
            <SwiperSlide className=" ml-0 ">
              <Text
                name="Charles Dube"
                summary=" Whether it's a sumptuous Thanks giving feast or a vibrant Lunar New Year spread, food brings people together and serves as a powerful symbol of unity and heritage."
                link="/"
                img={article1}
                but="Read more"
              />{" "}
            </SwiperSlide>
            <SwiperSlide className=" ml-0 ">
              <Text
                name="Charles Dube"
                summary=" Whether it's a sumptuous Thanks giving feast or a vibrant Lunar New Year spread, food brings people together and serves as a powerful symbol of unity and heritage."
                link="/"
                img={article1}
                but="Read more"
              />{" "}
            </SwiperSlide>
            <SwiperSlide className=" ml-0 ">
              <Text
                name="Charles Dube"
                summary=" Whether it's a sumptuous Thanks giving feast or a vibrant Lunar New Year spread, food brings people together and serves as a powerful symbol of unity and heritage."
                link="/"
                img={article1}
                but="Read more"
              />{" "}
            </SwiperSlide>
            <SwiperSlide className=" ml-0 ">
              <Text
                name="Charles Dube"
                summary=" Whether it's a sumptuous Thanks giving feast or a vibrant Lunar New Year spread, food brings people together and serves as a powerful symbol of unity and heritage."
                link="/"
                img={article1}
                but="Read more"
              />{" "}
            </SwiperSlide>
          </ul>
          <button className="bg-navy p-3 px-5 text-light float-right hover:underline underline-offset-2 hover:text-navy hover:bg-transparent hover:border hover:border-5 hover:border-navy text-sm rounded mt-5">
            VIEW MORE
          </button>
        </Swiper>
      </div>
    );
}

export default Testimonials