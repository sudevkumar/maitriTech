import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const TopNavBar = () => {
  return (
    <nav className="w-[100%] text-white text-sm">
      <div className="h-24 lg:h-8 bg-gradient-to-r  from-purple-800 to-pink-500 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-[100%] lg:w-[40%] flex justify-center">
          <h1 className="font-light">
            Welcome to the National Institute of Fine Arts
          </h1>
        </div>

        {/* Right Side */}

        <div className="flex justify-evenly w-[100%] lg:w-1/3 items-center flex-col lg:flex-row">
          <div className="flex w-[50%] justify-between lg:w-[50%] mt-3 lg:mt-0">
            <div className="flex w-1/2 lg:w-fit justify-center items-center ">
              <FaPhoneAlt />
              <span className="ml-2">9555112200</span>
            </div>

            <div className="flex w-1/2 lg:w-fit justify-center items-center lg:ml-5">
              <FaPhoneAlt />
              <span className="ml-2">9810130552</span>
            </div>
          </div>

          <div className="flex w-[70%] justify-between lg:w-[80%] mt-3 lg:mt-0 lg:ml-5">
            <div className="flex w-1/2 lg:w-fit justify-center items-center">
              <IoMdMail />
              <span className="ml-2">admission@nifafinearts.com</span>
            </div>

            <div className="flex w-1/2 lg:w-fit justify-center items-center lg:ml-5">
              <FaFacebookF />
              <FaTwitter className="ml-4 lg:ml-2" />
              <FiInstagram className="ml-4 lg:ml-2" />
              <FaYoutube className="ml-4 lg:ml-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
