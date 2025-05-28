import React from "react";
import Banner from "./banner";
import Bar from "../landing/second";
import Cards from "./cards";
import Footer from "../landing/ninth";

const tour = () => {
  return (
    <div>
      <Banner name={"All tours"} />
      <div className="relative w-[80%] max-lg:w-full mx-auto mt-7 flex flex-col gap-4">
        <Bar />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default tour;
