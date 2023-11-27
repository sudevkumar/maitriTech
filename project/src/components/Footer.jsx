import React from "react";
import {
  Activities,
  Company,
  PopularCourse,
  OurLocations,
} from "../assets/footer.js";
import FooterPart from "./FooterPart.jsx";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/v915_53876-174949.jpg?w=2000&t=st=1701111447~exp=1701112047~hmac=ab417abfd74030897be45821e66c2db137b423782b8dcf9b530240b36fa74fec')",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full h-96 mt-3  p-10" style={myStyle}>
      <div className="w-full lg:w-[80%]  m-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        <FooterPart data={Activities} />
        <FooterPart data={Company} />
        <FooterPart data={PopularCourse} />
        <FooterPart data={OurLocations} />
      </div>

      <div className="w-full lg:w-[80%] m-auto flex flex-col lg:flex-row mt-16">
        <div className="w-full lg:w-[50%]">
          <p className="font-bold mt-1">
            NIFA Is A Unit Of Nifaedutech Pvt Ltd.
          </p>
          <p className="font-semibold mt-1">Connect With Us</p>
          <p className="font-thin mt-1">9555112200,9810130552</p>
          <p className="font-thin mt-1">admission@nifafinearts.com</p>
          <div className="w-[50%] mt-1 flex justify-between">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-blue-600 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-blue-600 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-red-600 cursor-pointer">
              <FaYoutube />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-red-600 cursor-pointer">
              <FiInstagram />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col mt-4 lg:mt-0 lg:items-end">
          <h1>Download The App</h1>
          <div className="flex gap-3 mt-3">
            <img
              src="https://www.nifafinearts.com/images/gplay.png"
              alt=""
              className=" w-36 cursor-pointer"
            />
            <img
              src="https://www.nifafinearts.com/images/appstore.png"
              alt=""
              className="w-36 cursor-pointer"
            />
          </div>
          <p className="mt-4 font-thin text-sm">
            © Copyright 2021 NIFA Fine Arts. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
