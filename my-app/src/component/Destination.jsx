import React from "react";
import d1 from "../Assets/d1.jpg";
import d2 from "../Assets/d2.jpg";
import d3 from "../Assets/d3.jpg";
import d4 from "../Assets/d4.jpg";
import d5 from "../Assets/d5.jpg";

function Destination() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-5 text-center ">
      <h1>Beautiful Resorts</h1>
      <p className="py-4">The Land Above the Clouds </p>
      <div className=" grid grid-rows-none md:grid-cols-3 py-4 gap-2 md:gap-4 ">
        <img
          src={d4}
          alt="/"
          className='w-full h-full object-cover col-span-2 row-span-3 '
        />
        <img src={d3} alt="/" className="w-full h-full object-cover" />

        <img src={d5} alt="/" className="w-full h-full object-cover " />
        <img src={d1} alt="/" className="w-full h-full object-cover " />
      </div>
    </div>
  );
}

export default Destination;
