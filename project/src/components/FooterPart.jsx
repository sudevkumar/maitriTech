import React from "react";

const FooterPart = ({ data }) => {
  return (
    <div>
       <h1 className="font-bold">Activities</h1>
      {data?.map((ele, ind) => (
        <li
          className={
            ele === "International Branches"
              ? "list-none font-bold mt-5"
              : "list-none font-thin text-sm mt-1 cursor-pointer"
          }
          key={ind}
        >
          {ele}
        </li>
      ))}
    </div>
  );
};

export default FooterPart;

// "list-none font-thin"
