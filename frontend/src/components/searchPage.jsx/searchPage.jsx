import React from "react";
import Banner from "../tour/banner";
import Cards from "./cards";
import Footer from "../landing/ninth";

const searchPage = () => {
  return (
    <div>
      <Banner name={"Search tours"} />
      <div className="relative w-[80%] max-lg:w-full mx-auto mt-7 flex flex-col gap-4">
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default searchPage;
