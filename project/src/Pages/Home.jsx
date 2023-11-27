import React from "react";
import ButtomNavBar from "../components/ButtomNavBar";
import TopNavBar from "../components/TopNavBar";
import { slides } from "../assets/Dataarousel";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="w-[100%] h-[auto]">
      <TopNavBar />
      <ButtomNavBar />
      <Carousel data={slides} />
    </div>
  );
};

export default Home;
