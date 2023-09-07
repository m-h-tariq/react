import React from "react";
// import Typed from "react-typed";
import "./home.css";
// import Images from "../Images/images";
import HomeSlider from "./HomeSlider";
// import HomeAfterSlider from "./Marquee";
import Marquee from "./Marquee";
import Rectangle41 from "./Rectangle41";
import Rectangle45 from "./Rectangle45";
import LatestProjects from "../SharedComponents/LatestProject/LatestProjects";
import Testimonial from "./Testimonial";
import TestoimonialHeadings from "./TestoimonialHeadings";

// import Cards from "../SharedComponents/Cards/cards";
// import SuccessStories from "../SharedComponents/SuccessStories/SuccessStories";

const home = () => {
  return (
    <>
      <HomeSlider />
      <Marquee />
      <Rectangle41 />
      <Rectangle45 />
      <LatestProjects />
      <TestoimonialHeadings />
      <Testimonial />

    
    </>
  );
};

export default home;
