import React, { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import "./style.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const handlePrevSlide = () => {
    if (slide === 0) {
      setSlide(data.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const handleNextSlide = () => {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <div className="mt-5 lg:mt-0">
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="w-7 h-10 bg-slate-500 left-0 absolute flex justify-center items-center cursor-pointer text-white">
          <RiArrowDropLeftLine
            className="text-[100px]"
            onClick={handlePrevSlide}
          />
        </div>

        {data?.map((ele, ind) => {
          return (
            <img
              src={ele.src}
              alt={ele.alt}
              key={ind}
              className={slide === ind ? "w-[100%] h-[100%]" : "hidden"}
            />
          );
        })}
        <div
          className="w-7 h-10 bg-slate-500 right-0 absolute flex justify-center items-center cursor-pointer text-white
      "
        >
          <RiArrowDropRightLine
            className="text-[100px]"
            onClick={handleNextSlide}
          />
        </div>
      </div>

      <div className="flex w-[100%] lg:m-auto h-10">
        <div className="flex w-[20%] m-auto h-10  absolute left-0 lg:justify-end text-xs lg:text-lg font-bold">
          <span className="text-black">Nifa Updates::</span>
        </div>

        <div className="marquee">
          <span>
            All NIFA courses are now available worldwide through our Live and
            Interavtive online Classes. Pleae download the NIFA app from online
            class page to register for a complimentary trial class.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// https://www.nifafinearts.com/images/gplay.png
// https://www.nifafinearts.com/images/appstore.png
