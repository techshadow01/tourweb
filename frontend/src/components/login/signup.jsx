import React from "react";
import RegisterImg from "/images/register.png";
import User from "/images/user.png";
import { useContext } from "react";
import { Logcontext } from "../../context/context";

const signup = () => {
  const { islogin, setislogin } = useContext(Logcontext);
  const info = [
    {
      name: "username",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
  ];
  return (
    <div className="relative flex w-[1000px] bg-white drop-shadow-sm">
      <img className="w-[55%]" src={RegisterImg} alt="" />
      <div className="relative w-[45%] flex flex-col items-center justify-center gap-3 bg-[#FCA842]">
        <img
          className="absolute -top-[50px] left-[calc(50%-40px)] w-[80px] aspect-square"
          src={User}
          alt=""
        />
        <div className="text-6xl text-white">Register</div>

        {info.map((item, index) => {
          return (
            <div key={index} className="w-[70%]">
              <label
                for="username"
                class="block text-sm font-medium text-gray-700"
              >
                {item.name}
              </label>
              <input
                type={item.type}
                id={item.name}
                name={item.name}
                class="mt-1 p-2 w-full border rounded-3xl focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
          );
        })}

        <div>
          <button
            type="submit"
            class="w-full bg-black text-white p-2 px-5 rounded-3xl  hover:bg-gray-800 focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
        <div>or</div>
        <div class="w-full lg:w-1/2 mb-2 lg:mb-0">
          <button
            type="button"
            class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-4"
              id="google"
            >
              <path
                fill="#fbbb00"
                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
              ></path>
              <path
                fill="#518ef8"
                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
              ></path>
              <path
                fill="#28b446"
                d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
              ></path>
              <path
                fill="#f14336"
                d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
              ></path>
            </svg>{" "}
            Sign Up with Google{" "}
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <a
            href="#"
            className="text-white"
            onClick={() => setislogin(!islogin)}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default signup;
