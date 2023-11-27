import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniArrowSmallDown } from "react-icons/hi2";
import { HiMiniArrowSmallUp } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

const ButtomNavBar = () => {
  const [text, setText] = useState("Home");
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  const setOptText = (e) => {
    if (e.split("")[0] === "-") {
      setText(e.split("").slice(1, e.length));
    } else {
      setText(e);
    }

    setOpen(false);
  };

  const options = [
    "Home",
    "About Us",
    "-Facilities",
    "Courses",
    "-B.F.A from UGC Recognised University",
    "-M.A from UGC Recognised University",
    "-Two years advanced diploma in fine arts",
    "-One years diploma in fine arts",
    "-Six months diploma in fine arts",
    "-Entrance preparation for N.I.T",
    "-Entrance preparation for NIFT",
    "-Animaion sketching",
    "-Entrance preparation for B.F.A",
    "-One t0 three months certificate hobby course",
    "-Kids diploma(L-2)",
    "-Kids diploma(L-1)",
    "-Hobby certificate course for kids",
    "Activities",
    "-Workshops",
    "-Outdoor",
    "-National Art seminar & award show, 2018",
    "-Media coverage",
    "-Judging art events",
    "-Exhibitions",
  ];

  return (
    <nav className="w-[80%] flex m-auto justify-between items-center flex-col lg:flex-row relative z-50">
      <img
        src="https://www.nifafinearts.com/images/nifa-new-logo.png"
        alt=""
        className="h-16"
      />
      <div className="flex w-1/2 lg:w-fit justify-center items-center text-blue-950 lg:hidden">
        <IoMdMail />
        <span className="ml-2">admission@nifafinearts.com</span>
      </div>

      <div className="flex w-1/2 lg:w-fit justify-center items-center text-blue-950 lg:hidden">
        <FaPhoneAlt />
        <span className="ml-2">+91 9555112200/9810130552</span>
      </div>

      <div
        className="w-[100%] p-1 px-2 rounded-3xl text-white bg-blue-950  lg:hidden flex justify-between items-center"
        onClick={openModal}
      >
        <span>{text}</span>
        <span>{!open ? <HiMiniArrowSmallDown /> : <HiMiniArrowSmallUp />}</span>
      </div>

      {open === true && (
        <div className="absolute h-96 w-[50%] bg-white left-0 top-2 rounded-md duration-300 overflow-scroll">
          {options.map((ele, ind) => (
            <>
              <span className="p-2 py-4" onClick={() => setOptText(ele)}>
                {ele}
              </span>
              <hr />
            </>
          ))}
        </div>
      )}

      <li className="list-none font-light text-sm hidden lg:block">Home</li>
      <li className="list-none font-light text-sm hidden lg:block">About</li>
      <li className="list-none font-light text-sm hidden lg:block">Courses</li>
      <li className="list-none font-light text-sm hidden lg:block">
        Activities
      </li>
      <li className="list-none font-light text-sm hidden lg:block">
        Admission
      </li>
      <li className="list-none font-light text-sm hidden lg:block">
        Art Gallery
      </li>
      <li className="list-none font-light text-sm hidden lg:block">
        Franchise
      </li>
      <li className="list-none font-light text-sm hidden lg:block">
        Online Classes
      </li>
      <li className="list-none font-light text-sm hidden lg:block">Videos</li>
      <li className="list-none font-light text-sm hidden lg:block">Pay Fee</li>
      <li className="list-none font-light text-sm hidden lg:block">Contact</li>
    </nav>
  );
};

export default ButtomNavBar;
