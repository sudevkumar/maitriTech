import React from "react";

const Button = ({ text }) => {
  return (
    <button className="mb-10 text-white font-light mt-7 bg-gradient-to-r  from-purple-800 to-pink-500 w-fit h-fit px-5 py-2 rounded-full">
      {text}
    </button>
  );
};

export default Button;
