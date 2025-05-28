import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo1 from "/images/ava-1.jpg";
import photo2 from "/images/ava-2.jpg";
import photo3 from "/images/ava-3.jpg";

const seventh = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const info = [
    {
      name: "Alice Johnson",
      image: photo1,
      location: "New York, USA",
    },
    {
      name: "Marcus Lee",
      image: photo2,
      location: "Toronto, Canada",
    },
    {
      name: "Priya Sharma",
      image: photo3,
      location: "Mumbai, India",
    },
    {
      name: "Diego Martinez",
      image: photo2,
      location: "Barcelona, Spain",
    },
    {
      name: "Sophie Nguyen",
      image: photo3,
      location: "Sydney, Australia",
    },
  ];

  return (
    <div className="my-10 flex flex-col gap-7">
      <span className="relative w-fit island text-center text-4xl bg-[#FBA841] rounded-3xl px-2">
        Fans Love
      </span>
      <div className="text-5xl font-semibold">
        What our fans are saying about us
      </div>
      <Slider {...settings}>
        {info.map((item, index) => {
          return (
            <div key={index} className="w-[400px] flex flex-col p-3">
              <div className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid saepe praesentium dicta voluptatem provident, voluptatum
                atque cumque vitae architecto
              </div>
              <div className="flex gap-4">
                <img
                  className="w-[100px] aspect-[4/3]"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="font-semibold">{item.name}</div>
                  <div>{item.location}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default seventh;
