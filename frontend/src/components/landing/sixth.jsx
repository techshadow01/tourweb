import React from "react";
import photo1 from "/images/gallery-01.jpg";
import photo2 from "/images/gallery-02.jpg";
import photo3 from "/images/gallery-03.jpg";
import photo4 from "/images/gallery-04.jpg";
import photo5 from "/images/gallery-05.jpg";
import photo6 from "/images/gallery-06.jpg";
import photo7 from "/images/gallery-07.jpg";

const sixth = () => {
  return (
    <div className="flex flex-col gap-5">
      <span className="relative w-fit island text-center text-4xl bg-[#FBA841] rounded-3xl px-2">
        Gallery
      </span>
      <div className="text-5xl font-semibold">
        Visit our customers tour gallery
      </div>
      <div className="relative w-full h-[700px] flex justify-around ">
        <div className="w-[23%] flex flex-col gap-5">
          <img className="w-full h-[60%] rounded-2xl" src={photo1} alt="" />
          <img className="w-full h-[40%] rounded-2xl" src={photo2} alt="" />
        </div>
        <div className="w-[23%] flex flex-col gap-5">
          <img className="w-full h-[70%] rounded-2xl" src={photo7} alt="" />
          <img className="w-full h-[30%] rounded-2xl" src={photo4} alt="" />
        </div>
        <div className="w-[23%] flex flex-col gap-5">
          <img className="w-full h-[35%] rounded-2xl" src={photo6} alt="" />
          <img className="w-full h-[65%] rounded-2xl" src={photo1} alt="" />
        </div>
        <div className="w-[23%] flex flex-col gap-5">
          <img className="w-full h-[60%] rounded-2xl" src={photo5} alt="" />
          <img
            className="w-full h-[40%] rounded-2xl overflow-hidden"
            src={photo3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default sixth;
