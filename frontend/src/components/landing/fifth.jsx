import React from "react";
import CountUp, { useCountUp } from "react-countup";
import Experience from "/images/experience.png";

const fifth = () => {
  const info = [
    {
      name: "Successful trip",
      number: 12,
    },
    {
      name: "Reguler Clients",
      number: 2,
    },
    {
      name: "Years experience",
      number: 15,
    },
  ];

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="relative flex items-center justify-center py-5">
      <div className="flex flex-col gap-6 w-[50%]">
        <span className=" w-fit island text-center text-4xl bg-[#FBA841] rounded-3xl px-2">
          Experience
        </span>
        <div className="text-5xl font-semibold">
          With our all experience we will serve you
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus
          a placeat, rem quae non harum eos aliquam consequatur vel perferendis
          repellat fugiat quibusdam Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Adipisci, et?
        </div>
        <div className="flex gap-4">
          {info.map((item, index) => {
            return (
              <div
                key={index}
                className="w-fit flex flex-col items-center justify-center"
              >
                <div className="w-[60px] text-white text-xl font-semibold aspect-square bg-[#F97E24] flex items-center justify-center rounded-tr-2xl rounded-bl-2xl">
                  <CountUp end={item.number} enableScrollSpy />
                  {index != info.length - 1 && "k+"}
                  {index == info.length - 1 && "+"}
                </div>
                <div className="text-center">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <img src={Experience} alt="" />
      </div>
    </div>
  );
};

export default fifth;
