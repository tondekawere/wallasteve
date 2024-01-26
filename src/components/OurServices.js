import React from 'react'
import Paragraphs from './Paragraphs';
import Heading from './Headings';
import Cards from './Cards';


const OurServices = () => {
  return (
    <>
      <div className="w-full px-40 xs:px-5">
        <Heading
          text="Our Services"
          className=" !text-4xl !leading-tight lg:!text-4xl sm:!text-2xl xs:!text-2xl sm:!mb-8"
        />
        <Paragraphs
          text="Our repair service keeps your vehicle moving. From minor repairs to major repairs of your vehicle. 
        We offer a variety of services and you can count on us for all of your vehicle's needs.
            "
          className="mb-0 text-center w-2/3 !text-sm lg:!text-sm sm:!mb-2"
        />
      </div>

      <Cards />
      
    </>
  );
}

export default OurServices