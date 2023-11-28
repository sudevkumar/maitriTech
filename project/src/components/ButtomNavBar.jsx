import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniArrowSmallDown } from "react-icons/hi2";
import { HiMiniArrowSmallUp } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

const ButtomNavBar = () => {
  const [text, setText] = useState("Home");
  const [open, setOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);
  const [openArt, setOpenArt] = useState(false);

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

  const handleMouseOverAbout = (e) => {
    setOpenAbout(true);
    setOpenCourse(false);
    setOpenActivities(false);
    setOpenArt(false);
  };

  const handleMouseOverCourse = () => {
    setOpenAbout(false);
    setOpenCourse(true);
    setOpenActivities(false);
    setOpenArt(false);
  };

  const handleMouseOverActivities = () => {
    setOpenAbout(false);
    setOpenCourse(false);
    setOpenActivities(true);
    setOpenArt(false);
  };

  const handleMouseOverArt = () => {
    setOpenAbout(false);
    setOpenCourse(false);
    setOpenActivities(false);
    setOpenArt(true);
  };

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

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light  text-sm hidden lg:block cursor-pointer">
          Home
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li
          className="list-none font-light  text-sm hidden lg:block"
          onMouseOver={handleMouseOverAbout}
        >
          About
        </li>

        {openAbout && (
          <div
            className="absolute w-[15%] h-auto bg-gray-100 mt-3"
            onMouseOver={handleMouseOverAbout}
            onMouseLeave={() => setOpenAbout(false)}
          >
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Facilities
            </li>
          </div>
        )}
      </div>

      <div
        className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500"
        onMouseOver={handleMouseOverCourse}
      >
        <li className="list-none font-ligh text-sm hidden lg:block">Courses</li>

        {openCourse && (
          <div
            className="absolute w-[15%] h-auto bg-gray-100 mt-3 "
            onMouseOver={handleMouseOverCourse}
            onMouseLeave={() => setOpenCourse(false)}
          >
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              B.F.A from UGC Recognised University
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              M.A from UGC Recognised University
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Two years Advance Diploma in Fine Art
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              One years Advance Diploma in Fine Art
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              6 months Advance Diploma in Fine Art
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Entrance Preparation for F.I.D
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Entrance Preparation for N.I.D
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Entrance Preparation for NIFT
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Animation Sketching
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Entrance Preparation for B.F.A
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              1 to 3 months Certifcate Hobby Course
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Kids Diploma(L-2)
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Kids Diploma(L-1)
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Hobby Certificate Course For Kids
            </li>
          </div>
        )}
      </div>

      <div
        className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500"
        onMouseOver={handleMouseOverActivities}
      >
        <li className="list-none font-light text-sm hidden lg:block">
          Activities
        </li>

        {openActivities && (
          <div
            className="absolute w-[15%] h-auto bg-gray-100 mt-3 "
            onMouseOver={handleMouseOverActivities}
            onMouseLeave={() => setOpenActivities(false)}
          >
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Workshops
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Outdoor
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              National Art Seminar & Award Show, 2018
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Medical Coverage
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Judging Art Events
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Exibitions
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Daily Activities
            </li>
          </div>
        )}
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light  text-sm hidden lg:block">
          Admission
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li
          className="list-none font-light  text-sm hidden lg:block"
          onMouseOver={handleMouseOverArt}
        >
          Art Gallery
        </li>

        {openArt && (
          <div
            className="absolute w-[15%] h-auto bg-gray-100 mt-3"
            onMouseOver={handleMouseOverArt}
            onMouseLeave={() => setOpenArt(false)}
          >
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Work by Kids Level-2
            </li>
            <hr className=" border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Work by Kids Level-1
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light hover:bg-pink-500 p-2 hover:text-white duration-300">
              Sketching
            </li>
            <hr className="border-gray-500" />
            <li className="list-none font-light  hover:bg-pink-500 p-2 hover:text-white duration-300">
              Painting done by Students Of Level-3
            </li>
          </div>
        )}
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light text-sm hidden lg:block">
          Franchise
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light text-sm hidden lg:block">
          Online Classes
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light  text-sm hidden lg:block">
          Videos
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light text-sm hidden lg:block">
          Pay Fee
        </li>
      </div>

      <div className="p-2 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-b-pink-500 hover:border-t-pink-500">
        <li className="list-none font-light  text-sm hidden lg:block">
          Contact
        </li>
      </div>
    </nav>
  );
};

export default ButtomNavBar;
