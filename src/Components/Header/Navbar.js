import React, { useState } from "react";
import Images from "../Images/images";
import "./navbar.css";
import { Link } from "react-router-dom";
import Property1Variant3 from "../SharedComponents/pages/Property1Variant3.tsx";
import AboutUs from "../About/AboutUs";

const Navbar = () => {
  const [showEffect, setShowEffect] = useState(false);

  const handleClickServices = () => {
    setShowEffect(true);
    // Add any other functionality you want when the "Services" link is clicked
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 m-0 navbar-light bg-light  ">
        <Link className="navbar-brand  nav " to="/">
          {/* <img src={Images.BgImage} /> */}
          <img src={Images.LogoBig} alt="" className="Big_Logo"/>
          <img src={Images.LogoEntities} alt="" className="Entities-Logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse navigation"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav inner-navigation font-weight-bold">
            <Link className="nav-link active set_sizes service_Link" to="">
              Services <span className="sr-only">(current)</span>
              <Property1Variant3 />
            </Link>
            <Link className="nav-link active set_sizes service_Link" to="">
              About Us
              <AboutUs />
            </Link>
            <Link className="nav-link active set_sizes" to="/successstories">
              Portfolio
            </Link>
            <Link className="nav-link active set_sizes">+1 (302) 321-4914</Link>
            
          </div>
        
        </div>
        <Link className="contact nav-link  active set_sizes set_contact" to="/contact">
              Contact Us
            </Link>
       
      </nav>
      
    </>
  );
};

export default Navbar;
