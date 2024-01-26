import React from 'react';
import prof from "../../public/images/a2.png";
import beh from "../../public/images/beh.png";
import Image from "next/image";

const FramerImage = (Image);

const Behind = ({ img }) => {
  return (
    <li className=" w-full  col-span-1">
      <a className='w-full'>
        <FramerImage
          src={img}
          className="w-full object-cover h-[510px] "
        />
      </a>
    </li>
  );
};

const FirstCards = ({ img, title }) => {
  return (
    <li className=" w-full  col-span-1">
      <a className="w-full cursor-pointer inline-block overflow-hidden ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full object-cover h-[400px] lg:h-[55vh]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </a>
    </li>
  );
};

const Text = ({ title, summary,second}) => {
  return (
    <li className=" w-[95%] pb-5 col-span-1  text-left">
      <a>
        <h2 className="font-bold mt-16 xl:mt-0 mb-10 text-3xl text-left !text-navy dark:text-light w-full 
        mt-2 my-3 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2 xl:mb-0 text-left !text-navy  m-auto dark:text-light">
          {summary}
        </p>
        <p className="text-sm mb-2  !text-navy   m-auto dark:text-light">
          {second}
        </p>
      </a>
    </li>
  );
};

const WhyUs = () => {
  return (
    <div className="p-20 pb-0 pt-10 mb-32 xs:px-5 flex xs:grid gap-[5%] ">
      <div className="relative w-1/2 xs:w-full">
        <ul className="z-0 lg:hidden relative  pr-16">
          <Behind img={beh} />
        </ul>
        <ul className="z-1 absolute lg:relative  lg:top-0 lg:left-0 !bg-slate-600 border-[20px] h-[auto] border-solid !border-light top-20 left-20">
          <FirstCards img={prof} />
        </ul>
      </div>
      <div className="w-1/2 xs:w-full mt-20 lg:mt-0">
        <ul className="z-0">
          <Text
            title="Why Us"
            summary="We offer a number of advantages over other automotive and mechanical engineering companies, including:"
          />
        </ul>
        <ul className=" list-disc ml-4 ">
          <li className="text-sm text-navy">
            We are a one-stop shop for all of your automotive and mechanical
            engineering needs.
          </li>
          <li className="text-sm text-navy">
            We have a team of highly skilled and experienced employees.
          </li>
          <li className="text-sm text-navy">
            We use only the best materials and equipment.
          </li>
          <li className="text-sm text-navy">
            We are committed to providing high-quality work at all times.
          </li>
          <li className="text-sm text-navy">
            We offer a 100% satisfaction guarantee on all of our work.
          </li>
        </ul>
        <ul>
          <Text second="If you need any automotive or mechanical engineering services, please do not hesitate to contact us. We would be happy to help you." />
        </ul>
        <button className="!bg-navy p-3 px-5 w-1/2 xl:w-3/5 lg:w-4/5 xl:py-4 !text-light hover:underline underline-offset-2 !hover:text-navy hover:bg-transparent hover:border hover:border-5 hover:border-navy text-sm rounded mt-2">
          Schedule an Appointment
        </button>
      </div>
    </div>
  );
}

export default WhyUs