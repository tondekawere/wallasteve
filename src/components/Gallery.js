import React from 'react'
import Paragraphs from './Paragraphs';
import Heading from './Headings';
import Image from "next/image";
import img1 from "../../public/images/a1.png";
import img2 from "../../public/images/g2.png";
import img3 from "../../public/images/g3.png";
import img4 from "../../public/images/g4.png";
import img5 from "../../public/images/a3.png";
import img6 from "../../public/images/g6.png";

const Gallery = () => {
  return (
    <div className="p-20 pt-32 xs:px-5">
      <div className="w-full">
        <Heading
          text="Our Gallery"
          className=" !text-4xl !leading-tight lg:!text-4xl sm:!text-2xl xs:!text-2xl sm:!mb-8"
        />
        <Paragraphs
          text="Our repair service keeps your vehicle moving. From minor repairs to major repairs of your vehicle. 
        We offer a variety of services and you can count on us for all of your vehicle's needs.
            "
          className="mb-0 text-center w-2/3 !text-sm lg:!text-sm sm:!text-3xl xs:!text-sm sm:!mb-2"
        />
      </div>
      <div className="flex mt-10 xs:mt-2 gap-5 flex-col-12 col-span-12">
        <div className=" flex gap-5 xs:hidden col-12 flex-col-12">
          <div className="col-span-6 ">
            <Image
              src={img1}
              alt="image"
              className="rounded-1xl h-[465px] object-cover xl:h-[400px]   overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid gap-5 lg:hidden col-span-6">
            <Image
              src={img2}
              alt="image"
              className="rounded-1xl object-cover xl:h-[189px]    overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
            <Image
              src={img3}
              alt="image"
              className="rounded-1xl object-cover xl:h-[189px]  hover:scale-[1.001] overflow-hidden   transition-delay-[0.2] "
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className=" grid gap-5 col-12  flex-col-12">
          <div className="flex gap-5 col-span-6">
            <Image
              src={img4}
              alt="image"
              className="rounded-1xl object-cover w-1/2 h-[220px] xl:h-[189px]    overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
            <Image
              src={img5}
              alt="image"
              className="rounded-1xl object-cover w-1/2 h-[220px] xl:h-[189px]  hover:scale-[1.001] overflow-hidden   transition-delay-[0.2] "
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-6">
            <Image
              src={img6}
              alt="image"
              className="rounded-1xl object-cover xl:h-[189px]    overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;