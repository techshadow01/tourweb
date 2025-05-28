import { React, useState } from "react";
import Location from "../../assets/svg/location.svg";
import Distance from "../../assets/svg/distance.svg";
import People from "../../assets/svg/people.svg";
import Search from "../../assets/svg/search.svg";
import { useNavigate } from "react-router-dom";

const second = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ Location: "", Distance: "", People: "" });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const info = [
    {
      name: "Location",
      place: "Where are you going?",
      img: Location,
      type: "text",
      size: "w-[30px]",
    },
    {
      name: "Distance",
      place: "Distance km/h",
      img: Distance,
      type: "number",
      size: "w-[40px]",
    },
    {
      name: "People",
      place: "0",
      img: People,
      type: "number",
      size: "w-[30px]",
    },
  ];

  const handlesubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(form).toString();
    navigate(`/search?${queryParams}`);
  };

  return (
    <form
      className="w-fit rounded-full shadow-md flex items-center justify-center p-4"
      onSubmit={handlesubmit}
    >
      {info.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <img
                className={`${item.size} aspect-square`}
                src={item.img}
                alt=""
              />
              <div className="flex flex-col text-black">
                <div>{item.name}</div>
                <input
                  className="bg-transparent focus:outline-none"
                  name={item.name}
                  value={form[item.name]}
                  type={item.type}
                  placeholder={item.place}
                  onChange={handleForm}
                  required
                />
              </div>
              {index != info.length - 1 && (
                <div className="h-[40px] w-0.5 bg-slate-400 mr-4"></div>
              )}
            </div>
          </div>
        );
      })}
      <button type="submit">
        <img
          className="w-[40px] bg-[#FBA841] aspect-square rounded-xl p-2 cursor-pointer"
          src={Search}
          alt="Search"
        />
      </button>
    </form>
  );
};

export default second;
