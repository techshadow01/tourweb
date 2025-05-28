import React from "react";
import Worldimg from "/images/world.png";
import Heroimg1 from "/images/hero-img01.jpg";
import Heroimg2 from "/images/hero-img02.jpg";
import Heroimg3 from "/images/pexels-david-bartus-586687.jpg";

const first = () => {
  return (
    <div className=" h-[600px] mt-5 flex items-center justify-center gap-4">
      <div className="w-[50%] flex flex-col gap-8">
        <span className="relative w-[250px] island text-center text-4xl bg-[#FBA841] rounded-3xl px-2">
          Know Before you go
          <img
            className="absolute -top-1 -right-[60px] w-[60px] aspect-square"
            src={Worldimg}
            alt=""
          />
        </span>

        <div className="text-6xl font-semibold">
          <span>Travelling opens the door to creating </span>
          <span className="text-[#FBA841]">memories</span>
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus
          a placeat, rem quae non harum eos aliquam consequatur vel perferendis
          repellat fugiat quibusdam, similique tempora cupiditate distinctio
          eveniet id nostrum quam repudiandae nemo quo inventore iste? Velit
          praesentium id adipisci Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsa distinctio aspernatur libero pariatur culpa
          tenetur quas necessitatibus earum neque deserunt?
        </div>
      </div>
      <div className="relative h-full flex items-center justify-center gap-5">
        <div className="flex items-start justify-start h-[70%]">
          <img
            className="w-[220px] h-[350px] object-cover rounded-3xl border border-[#FBA841]"
            src={Heroimg1}
            alt=""
          />
        </div>

        <div className="flex items-center h-[70%]">
          <img
            className=" w-[220px] h-[350px] object-cover rounded-3xl border border-[#FBA841]"
            src={Heroimg2}
            alt=""
          />
        </div>

        <div className="flex items-end justify-end h-[70%]">
          <img
            className=" w-[220px] h-[350px] object-cover rounded-3xl border border-[#FBA841]"
            src={Heroimg3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default first;
