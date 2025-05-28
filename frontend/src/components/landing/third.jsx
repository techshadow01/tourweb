import React from "react";
import Weather from "/images/weather.png";
import Guide from "/images/guide.png";
import Customization from "/images/customization.png";

const third = () => {
  const info = [
    {
      name: "Calculate weather",
      img: Weather,
    },
    {
      name: "Best Tour Guide",
      img: Guide,
    },
    {
      name: "Customization",
      img: Customization,
    },
  ];
  return (
    <div className="flex items-center justify-around gap-4 py-[100px] ">
      <div className="flex flex-col gap-2 max-w-[300px]">
        <div className="text-red-500 island text-4xl">What we serve</div>
        <div className="text-4xl font-semibold">We offer our best services</div>
      </div>

      {info.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-2 border-r border-b border-[#FBA841] max-w-[300px] p-3"
          >
            <img
              className="w-[40px] bg-[#FBA841] aspect-square rounded-full p-1 "
              src={item.img}
              alt=""
            />
            <div>{item.name}</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default third;
