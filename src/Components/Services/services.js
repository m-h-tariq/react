import React from "react";
import "./services.css";
import Cards from "../SharedComponents/Cards/cards";
import Images from "../Images/images";
import Testies from "../SharedComponents/Testies/Testies";
import Testimonial from "../Home/Testimonial";
const services = () => {
  return (
    <>
      <div className="services-main-div ">
        <img className="uniquelogo" src={Images.Contact_vector} alt=""/>
        <div className="Discover">
          <h1 className="Services_heading_">
            Discover our <samp className="services"> services </samp>
          </h1>
        </div>
      </div>
      <div className="bg-img ">
        <h2>
          Streamline your business processes, modernize your technology systems,
          and launch innovative products with Big Entities - a software
          development company dedicated to quality.
        </h2>
        <div className="unlock mt-5">
          Unlock AI potential with us
          <img className="mt-1 ml-3" src={Images.Arrow} alt=""/>{" "}
        </div>
      </div>
      <Cards />
      <Testies Testimonial_Heading="We love to hear from our clients"
    Testimonial_text="Don’t take our words for it. See what our client have to say about their experience with us."
    />
    <Testimonial />
        
    </>
  );
};

export default services;
