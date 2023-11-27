import React from "react";
import { videos } from "../assets/youtube";

const Testimonial = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1700403984066-57dbaaaa2509?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="w-full mt-10 p-10 text-white hidden md:block"
      style={myStyle}
    >
      <h1 className="text-center font-bold text-3xl">Student Work</h1>
      <div className="w-[75%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {videos?.map((ele, ind) => (
          <div key={ind} className="w-[100%] p-2 bg-white">
            <iframe
              className="w-[99%]"
              src={ele.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
