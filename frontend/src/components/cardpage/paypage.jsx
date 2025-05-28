import { React, useState } from "react";
import { useParams } from "react-router";
import Star from "../../assets/svg/star.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tours } from "../../assets/data/tours";

const paypage = () => {
  const [form, setForm] = useState({
    name: "",
    Phone: "",
    Date: new Date(),
    Guest: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleDateChange = (date) => {
    setForm({ ...form, Date: date });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(form).toString();
    navigate(`/search?${queryParams}`);
  };

  const { tourid } = useParams();
  const tour = tours.find((t) => t.id === tourid);

  const info = [
    {
      key: `₹${tour.price} x 1 Person`,
      value: `₹${tour.price}`,
    },
    {
      key: "Service charge",
      value: "₹10",
    },
    {
      key: "Total",
      value: `₹${tour.price + 10}`,
    },
  ];
  return (
    <form
      className="sticky top-28 w-[30%] h-[690px] p-7 flex flex-col justify-around border border-slate-500 rounded-2xl"
      onSubmit={handlesubmit}
    >
      <div className="flex items-center justify-between mx-2">
        <div className="flex items-end">
          <div className=" font-bold text-2xl">$99 </div>
          <div className="text-slate-800">/person</div>
        </div>
        <div className="flex gap-2">
          <img className="w-[15px] aspect-square" src={Star} alt="" />
          <div>4.5</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" font-bold text-2xl">Information</div>
        <div className="border border-slate-500 flex flex-col gap-6 p-5 rounded-lg">
          <input
            className="border-b border-slate-500 focus:outline-none "
            name="name"
            value={form.name}
            placeholder="Full name"
            type="text"
            onChange={handleForm}
            required
          />
          <input
            className="border-b border-slate-500 focus:outline-none "
            name="Phone"
            value={form.Phone}
            placeholder="Phone"
            type="number"
            onChange={handleForm}
            required
          />

          <div className="flex items-center justify-around">
            <DatePicker
              className="focus:outline-none focus:border-none"
              name="Date"
              selected={form.Date}
              onChange={handleDateChange}
              required
            />
            <input
              className="border-b border-slate-500 focus:outline-none min-w-[120px] "
              name="Guest"
              value={form.Guest}
              placeholder="Guest"
              type="text"
              onChange={handleForm}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {info.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <div>{item.key}</div>
              <div>{item.value}</div>
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="text-white bg-[#FBA841] rounded-3xl p-2 cursor-pointer"
      >
        Book Now
      </button>
    </form>
  );
};

export default paypage;
