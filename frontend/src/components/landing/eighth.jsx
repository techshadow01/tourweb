import React from "react";
import Tourist from "/images/male-tourist.png";

const eighth = () => {
  return (
    <div className="relative flex items-center justify-center mt-7">
      <div className="absolute -left-[12.5%] w-screen -z-10 h-full bg-[#C2DFEF]"></div>
      <div className="flex flex-col gap-6 w-[50%]">
        <div className="text-5xl font-semibold">
          Subscribe now to get useful information
        </div>
        <div className="w-fit flex justify-between p-2 pl-5 gap-3 bg-white rounded-full ">
          <input
            className="w-[500px] h-[40px] focus:outline-none text-xl"
            placeholder="enter ypur email"
            type="text"
          />
          <div className=" text-white flex items-center justify-center  bg-[#FBA841] rounded-full px-4">
            Submit
          </div>
        </div>

        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus
          a placeat, rem quae non harum eos
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <img src={Tourist} alt="" />
      </div>
    </div>
  );
};
export default eighth;
