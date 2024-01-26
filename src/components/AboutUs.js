import React from 'react';
import Image from "next/image";
import img1 from "../../public/images/a1.png";
import img2 from "../../public/images/a2.png";
import img3 from "../../public/images/a3.png";
import Paragraphs from './Paragraphs';
import Heading from './Headings';



const AboutUs = () => {
  return (
    <div className="p-20 grid gap-20 xs:gap-5 xs:p-5 xs:py-20">
      <Heading
        text="About Us"
        className="!text-4xl !leading-tight lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:!mb-8"
      />
      <div className="w-full gap-20 flex lg:flex lg:gap-10 xs:grid">
        <div className=" flex lg:hidden gap-5 col-12 flex-col-12 lg:w-full">
          <div className="col-span-6 xl:w-full lg:w-[200px]">
            <Image
              src={img1}
              alt="image"
              className="rounded-1xl lg:hidden overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid gap-5 xl:hidden lg:w-[100%] lg:flex col-span-6">
            <Image
              src={img2}
              alt="image"
              className="rounded-1xl  hover:opacity-[0.5] overflow-hidden"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
            <Image
              src={img3}
              alt="image"
              className="rounded-1xl hover:scale-[1.001] overflow-hidden hover:opacity-[0.5] transition-delay-[0.2] "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <Image
          src={img2}
          alt="image"
          className="rounded-1xl hidden object-cover lg:block lg:w-full xs:h-[45vh] xs:!w-[100vw] xs:col-span-8"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="col-span-6 w-1/2 xl:w-2/5 lg:w-full xs:col-span-8">
          <Paragraphs
            text="Wallasteve Auto & Mechanical Engineering is a leading provider of automotive and 
            mechanical engineering services in Zimbabwe. We are committed to providing our customers 
            with the best possible experience, and we are constantly innovating to improve our 
            services and products. We are also committed to giving back to the community in which 
            we operate.We were founded in 2023 by a team of experienced engineers and mechanics who 
            are passionate about providing high-quality automotive and mechanical engineering 
            services. We have a team of highly skilled and experienced employees who are constantly 
            training on the latest technologies and procedures. We use only the best materials and
             equipment, and we are committed to delivering high-quality work at all times
            "
            className="mb-2 text-left !text-sm lg:!text-sm sm:!text-sm xs:!text-sm sm:!mb-2"
            style={{ lineHeight: "50px !important" }}
          />
          <Paragraphs
            text="We aim to inspire the world by showing its possible to simultaneously to live 
            happiness to customers. Employees, vendors shareholders and community in a long-term 
            sustainable way we hope in the future people won't even realise we started by just fixing 
            cars .Instead they will know us as a service company that just happens to build and 
            assemble cars in Zimbabwe
            "
            className="mb-0 text-left  !text-sm xl:hidden"
          />
          <button className="bg-navy p-3 px-5 text-light text-sm rounded mt-5">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs