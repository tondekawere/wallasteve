import React from 'react'
import Paragraphs from './Paragraphs';
import Heading from './Headings';
import { Profiles } from './Cards';

const Team = () => {
  return (
    <>
      <div className="w-full px-40 lg:px-40 xs:px-5">
        <Heading
          text="Our Team"
          className=" !text-4xl !leading-tight lg:!text-4xl mt-11 sm:!text-6xl xs:!text-4xl sm:!mb-8"
        />
        <Paragraphs
          text="Our repair service keeps your vehicle moving. From minor repairs to major repairs of your vehicle. 
        We offer a variety of services and you can count on us for all of your vehicle's needs.
            "
          className="mb-0 text-center w-2/3 !text-sm   sm:!text-3xl xs:!text-sm sm:!mb-2"
        />
      </div>
      <Profiles  />
    </>
  );
}

export default Team