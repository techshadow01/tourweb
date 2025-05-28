import { React, useState } from "react";
import { tours } from "../../assets/data/tours";
import Star from "../../assets/svg/star.svg";
import Location from "../../assets/svg/location.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const cards = () => {
  const navigate = useNavigate();

  const Postperpage = 5;
  const [curPage, setcurPage] = useState(1);

  const lastIndex = curPage * Postperpage;
  const firstIndex = lastIndex - Postperpage;
  const curPosts = tours.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(tours.length / Postperpage);

  return (
    <div>
      <div className="flex flex-wrap gap-6 py-4">
        {curPosts.map((item, index) => {
          return (
            <div
              key={index}
              className="relative shadow-lg hover:shadow-2xl duration-500 w-[320px] h-[340px] flex flex-col rounded-sm overflow-hidden"
              onClick={() => navigate(`/tour/${item.id}`)}
            >
              <div className=" relative w-full h-[60%] ">
                <img className="w-full h-full" src={item.photo} alt="" />
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
                    <img className="w-[15px] aspect-square" src={Star} alt="" />
                    <div>{item.avgRating}</div>
                  </div>
                </div>
                <div className="font-semibold ml-2 text-xl">{item.title}</div>
                <div className="flex items-center justify-between mx-2">
                  <div className="flex">
                    <div className="text-[#FBA841] font-bold text-lg">$99 </div>
                    <div>/person</div>
                  </div>
                  <div className="text-white  bg-[#FBA841] rounded-sm p-1 cursor-pointer">
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-fit">
        <Stack spacing={2}>
          <Pagination
            onChange={(e, value) => setcurPage(value)}
            page={curPage}
            size="large"
            count={totalPages}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#FBA841",
                "&.Mui-selected": {
                  backgroundColor: "#FBA841",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#e5932e", // a slightly darker shade for hover
                  },
                },
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default cards;
