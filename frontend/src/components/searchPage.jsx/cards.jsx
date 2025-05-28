import React from "react";
import { tours } from "../../assets/data/tours";
import Location from "../../assets/svg/location.svg";
import Star from "../../assets/svg/star.svg";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const cards = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const location = queryParams.get("Location");
  const distance = queryParams.get("Distance");
  const people = queryParams.get("People");

  return (
    <div>
      {" "}
      <div className="flex items-center  flex-wrap gap-6 py-4">
        {tours.map((item, index) => {
          return (
            distance <= item.distance &&
            location == item.city &&
            people <= item.maxGroupSize && (
              <div
                key={index}
                className="relative shadow-lg hover:shadow-2xl duration-500 w-[320px] h-[340px] flex flex-col rounded-sm overflow-hidden"
                onClick={() => navigate(`/tour/${item.id}`)}
              >
                <div className=" relative w-full h-[60%] ">
                  <img className="w-full h-full" src={item.photo} alt="" />
                  <div className="absolute right-0 bottom-0 text-white  bg-[#FBA841] rounded-sm p-1">
                    Featured
                  </div>
                </div>
                <div className="w-full h-[40%] flex flex-col justify-around">
                  <div className="flex items-center justify-between mx-2">
                    <div className="flex gap-2">
                      <img
                        className="w-[20px] aspect-square"
                        src={Location}
                        alt=""
                      />
                      <div>{item.city}</div>
                    </div>
                    <div className="flex gap-2">
                      <img
                        className="w-[15px] aspect-square"
                        src={Star}
                        alt=""
                      />
                      <div>{item.avgRating}</div>
                    </div>
                  </div>
                  <div className="font-semibold ml-2 text-xl">{item.title}</div>
                  <div className="flex items-center justify-between mx-2">
                    <div className="flex">
                      <div className="text-[#FBA841] font-bold text-lg">
                        $99{" "}
                      </div>
                      <div>/person</div>
                    </div>
                    <div className="text-white  bg-[#FBA841] rounded-sm p-1 cursor-pointer">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default cards;
