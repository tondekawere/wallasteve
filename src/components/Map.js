import React from "react";
// import { GoogleMap, Marker } from "google-maps-react";

const Map = () => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="w-full h-50 overflow-hidden xl:w-[100%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7487.989573263936!2d28.510110444844035!3d-20.217537686267132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5513a632314c1%3A0xa6c288eb41363223!2sMganwini%20Tashas!5e0!3m2!1sen!2szw!4v1704713442426!5m2!1sen!2szw"
        width="500"
        height="420"
        allowfullscreen=""
        loading="lazy"
        className="xl:w-full xl:h-[23vh] lg:h-[30vh] xs:h-[25vh]"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
