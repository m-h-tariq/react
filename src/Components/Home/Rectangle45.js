import React from "react";
import "./Rectangle45.css";
import Images from "../Images/images";
import { Link } from "react-router-dom";

const Rectangle45 = () => {
  return (
    <>
      <div className="container-fluid Rectangle45-1">
        <div className=" Rectangle45-1row">
          
            <div className="rectangle-top">
              <div className="Rectangle45-2">Providing a vast range of</div>
              <div className="Rectangle45-3">software services</div>
              <div className="Rectangle45-4">
                Big Entities offers a range of IT services to support your
                business needs. From software development to network management,
                we've got you covered.
              </div>
            </div>
          
                <div className="items">
                  <div className="item">
                    <img className="Mobile" src={Images.Ai_Mind} alt=""></img>
                  <Link to="/services/artificialintelligence">  <p className="card-heading-div">Artificial Intelligence</p></Link>
                  </div>
                  <div className="item">
                    <img className="Mobile" src={Images.Mobile} alt=""></img>
                  <Link to="/services/userexperiencedesign">  <p className="card-interface-div">User Interface Design</p></Link>
                  </div>
                  <div className="item">
                    <img
                      className="Mobile"
                      src={Images.Application_dev}
                      alt=""
                    ></img>
                   <Link to="/webappdevelopment"s> <p className="card-heading-div">Web Development</p></Link>
                  </div>
                  <div className="item">
                    <img
                      className="Mobile"
                      src={Images.Mobile_Setting}
                      alt=""
                    ></img>
                    <Link to="/mobileappdevelopment"><p className="card-heading-div">Mobile Development</p></Link>
                  </div>
                  <div className="item">
                    <img
                      className="Mobile"
                      src={Images.Blockchain_dev}
                      alt=""
                    ></img>
                   <Link to="/blockchaindevelopment"> <p className="card-heading-div">Blockchain Development</p></Link>
                  </div>
                  <div className="item">
                    <img
                      className="Mobile"
                      src={Images.Review_Meeting}
                      alt=""
                    ></img>
                  <Link to="/softwaredevelopment">  <p className="card-heading-div">Software Consultancy</p></Link>
                  </div>
                  <div className="item">
                    <img className="Mobile" src={Images.Cloud_dev} alt=""></img>
                   <Link  to="/devopssolutions"> <p className="card-heading-div">Cloud Solutions</p></Link>
                  </div>
                </div>
            </div>
          </div>
        
      </>
    
  );
};

export default Rectangle45;
