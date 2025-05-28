import React from "react";
import TourImg from "/images/tour.jpg";

const banner = ({ name }) => {
  return (
    <div className="relative w-screen h-[300px] bg-red-500">
      <img className="w-full h-full object-cover" src={TourImg} alt="" />
      <div className="absolute top-0  w-full h-full opacity-25 bg-black"></div>
      <div className="absolute top-0  w-full h-full flex items-center justify-center text-5xl font-semibold text-white">
        {name}
      </div>
    </div>
  );
};

export default banner;
