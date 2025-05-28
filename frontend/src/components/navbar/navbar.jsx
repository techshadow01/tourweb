import { React, useState, useEffect } from "react";
import Logo from "/images/logo.png";
import { NavLink } from "react-router-dom";
import Modal from "../login/modallog";

const navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 w-screen h-[80px] bg-white ${
        isScrolled ? "shadow-md " : ""
      }`}
    >
      <div className="w-[80%] max-lg:w-full h-full  max-lg:px-2 flex items-center justify-between mx-auto">
        <a className="h-full " href="/">
          <img className="h-[80%]" src={Logo} alt="" />
        </a>
        <div className="w-[50%] flex items-center justify-between text-xl font-semibold">
          <div className="flex items-center justify-center gap-8">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#FBA841]" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#FBA841]" : "")}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#FBA841]" : "")}
              to="/tour"
            >
              Tour
            </NavLink>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button className="relative">
              Login
              <Modal value={true} />
            </button>
            <button className="relative text-white bg-[#FBA841] rounded-3xl px-2 py-1 overflow-hidden">
              Register
              <Modal value={false} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
