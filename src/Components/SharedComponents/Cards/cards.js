import React from "react";
import "./card.css";
import Images from "../../Images/images";
const cards = (props) => {
  console.log(props);
  return (
    <div className="cards-main-div">
      <img className="unique22" src={Images.Unique2} alt=""/>

      <div className="cards-sub-div ">
      <div className="item">
                    <img className="Mobile" src={Images.Mobile} alt=""></img>
                    <p className="card-interface-div">User Interface Design</p>
                  </div>
                  <div className="item card">
                    <img className="Mobile" src={Images.Application_dev} alt=""></img>
                    <p className="card-interface-div">Web Development</p>
                  </div>
                  <div className="item card">
                    <img className="Mobile" src={Images.Mobile_Setting} alt=""></img>
                    <p className="card-interface-div">Mobile Development</p>
                  </div>
                  <div className="item card">
                    <img className="Mobile" src={Images.Ai_Mind} alt=""></img>
                    <p className="card-interface-div">Artificial Intelligence</p>
                  </div>
      </div>
      <div className="cards-sub-div2 ">
      <div className="item card">
                    <img className="Mobile" src={Images.Blockchain_dev} alt=""></img>
                    <p className="card-interface-div">Blockchain Development</p>
                  </div>
                  <div className="item card">
                    <img className="Mobile" src={Images.Review_Meeting} alt=""></img>
                    <p className="card-interface-div">Software Consultancy</p>
                  </div>
                  <div className="item card">
                    <img className="Mobile" src={Images.Cloud_dev} alt=""></img>
                    <p className="card-interface-div">Cloud Solutions</p>
                  </div>
        <div className="text-div">
          {" "}
          <p className="we-are mb-0 mt-0">We are</p>
          <p className="dedicated mb-0"> dedicated to</p>
          <p className="Quality"> Quality </p>
        </div>
      </div>
    </div>
  );
};

export default cards;
