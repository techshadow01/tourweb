import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import Star from "../../assets/svg/star.svg";
import Paypage from "./paypage";
import Avatar from "/images/avatar.jpg";
import axios from "axios";

const cardpage = () => {
  const { tourid } = useParams();
  const [tour, settour] = useState([]);

  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    axios
      .get("http://localhost:8000/review/review-list")
      .then((res) => {
        const resData = res.data.data;
        settour(resData?.find((t) => t.id == tourid));
        console.log(resData, tourid);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      });
  }, []);

  return (
    <div className="relative w-[80%] max-lg:w-full mx-auto my-8 flex  gap-4">
      <div className="relative  w-[70%] flex flex-col gap-4">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <img className="w-full " src={tour.photo} alt="" />
          <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/0"></div>
          <div className="absolute flex flex-col gap-4 bottom-10 left-10 text-white">
            <div className="text-6xl ">{tour.title}</div>
            <div className="flex gap-11 text-xl">
              <div className="flex gap-2">
                <img className="w-[15px] aspect-square" src={Star} alt="" />
                <div>4.5</div>
              </div>
              <div>{tour.city}</div>
              <div>{tour.maxGroupSize} People</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-slate-500 rounded-2xl p-3">
          <div className="text-4xl font-semibold">Description</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore
            quos esse modi. Culpa, qui exercitationem. Deleniti unde facere
            quisquam nesciunt atque doloremque mollitia? Iure quibusdam modi
            iusto culpa sint, ab accusantium quam hic molestias, eveniet
            corporis ex veritatis repudiandae repellendus numquam sequi? Facere,
            illo.
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-slate-500 rounded-2xl p-3 px-5">
          <div className="text-3xl font-semibold">
            Reviews &#40;1 reveiw&#41;
          </div>
          <div className="flex gap-5">
            {stars.map((item, index) => {
              return (
                <div key={index} className="flex gap-1">
                  <div className="text-[#FBA841]">{item}</div>
                  <img className="w-[15px] aspect-square" src={Star} alt="" />
                </div>
              );
            })}
          </div>
          <div className="w-fit flex justify-between p-2 pl-5 gap-3 border  rounded-full ">
            <input
              className="w-[500px] h-[40px] focus:outline-none text-lg"
              placeholder="share your thoughts..."
              type="text"
            />
            <div className=" text-white flex items-center justify-center  bg-[#FBA841] rounded-full px-4">
              Submit
            </div>
          </div>
          {tour.reviews?.map((item, index) => {
            return (
              <div key={index} class="py-3 sm:py-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={Avatar}
                      alt="Bonnie image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="">{item.name}</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <img className="w-[15px] aspect-square" src={Star} alt="" />
                    <div>{item.rating}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Paypage />
    </div>
  );
};

export default cardpage;
