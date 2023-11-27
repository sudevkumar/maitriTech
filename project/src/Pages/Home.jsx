import React from "react";
import ButtomNavBar from "../components/ButtomNavBar";
import TopNavBar from "../components/TopNavBar";
import { slides } from "../assets/Dataarousel";
import Carousel from "../components/Carousel";
import Text from "../components/Text";
import TextTwo from "../components/TextTwo";
import StudentWork from "../components/StudentWork";
import OurCourses from "../components/OurCourses";
import { course } from "../assets/course";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-[100%] h-full">
      <TopNavBar />
      <ButtomNavBar />
      <Carousel data={slides} />
      <Text />
      <TextTwo />
      <OurCourses data={course} />
      <StudentWork />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
