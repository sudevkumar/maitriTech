import React from "react";
import Button from "./Button";

const OurCourses = ({ data }) => {
  return (
    <div className="w-[75%] m-auto mt-5">
      <h1 className="text-center font-bold text-3xl">Our Courses</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
        {data?.map((ele, inx) => (
          <div className="shadow-slate-500 border rounded-lg flex flex-col items-center hover:scale-105 duration-500">
            <img className="w-full rounded-t-lg" src={ele.src} alt="" />
            <div className="h-14">
              <p className="px-5 mt-2 text-center text-sm font-light">
                {ele.text}
              </p>
            </div>
            <Button text={"Know More"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
