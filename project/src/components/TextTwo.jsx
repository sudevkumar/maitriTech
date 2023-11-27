import React from "react";

const TextTwo = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1620646233562-f2a31ad24425?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-[100%] h-auto bg-black  text-white" style={myStyle}>
      <div className="w-[96%] lg:w-[75%] m-auto py-16 lg:py-28 flex justify-between flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[45%] flex flex-col ">
          <h1 className="text-center lg:text-start text-3xl font-bold">
            Online Classes
          </h1>
          <p className="ext-center lg:text-start text-sm font-thin mt-3">
            Dear Students/Parents, Nifa presents its Learning App for your
            regular art practice in which we have added many amazing features
            Like: Step-by-step recorded demo videos prepared by your faculty
            members. Regular assessment of your practise through assignment
            section. Live class section from same app. Attendance, payment
            invoice, art news, announcements, important information and direct
            connect with the management team are some more features. So hurry up
            n join now to experience personalised coaching by experts sitting at
            your home.
          </p>

          <p className="ext-center lg:text-start text-sm font-thin mt-3">
            We wish u Happy Learning. Stay Safe n Healthy.
          </p>

          <button className="w-fit bg-gradient-to-r  from-purple-800 to-pink-500 text-white px-5 py-2 rounded-full mt-3 border-2 border-white">
            Read More
          </button>

          <div>
            <h1 className="mt-7 font-bold">Download The App</h1>
            <div className="flex mt-2">
              <img
                src="https://www.nifafinearts.com/images/gplay.png"
                alt=""
                className="w-[35%] h-10"
              />
              <img
                className="w-[35%] h-10 ml-2"
                src="https://www.nifafinearts.com/images/appstore.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[97%] m-auto lg:w-[50%] h-72 p-2 flex justify-center items-center flex-col bg-white mt-10 lg:mt-0">
          <iframe
            className="w-[99%] h-full"
            src="https://www.youtube.com/embed/-9cJjaLXKqE?si=ZT_OfUhmX_WBZyZS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TextTwo;
