import React from "react";
import "./Rectangle41.css";
import Images from "../Images/images";
// import BgVideo from "../SharedComponents/Bgvideo/BgVideo";
const Rectangle41 = () => {
  return (
    <>
      <div className="rectangle41-main ">
        <img src={Images.svg41} alt="" className="svg41" />
        
        <div className="rectangle41-text-div-main">
          <p className="Rectangle41-text-div">
            Your Partner for <span className="software-text">Software</span>{" "}
            <span className="innovation">Innovation</span>
            
          </p>
          
          <p className="Rectangle41-desc-div">
            
            The dedicated team of designers, engineers and experienced software
            developers are committed to delivering superior quality solutions
            that align with your unique requirements <br></br><br></br>
            <button type="button" class="btn btn-primary explore-this-button">Explore our offer <img src={Images.Arrow} alt=""/></button>
          </p>
          

          {/* <button className="seemore-btn ">
            Explore our offer
            <div class="arrow-5"></div>
          </button> */}
          
            {/* <img className="ml-3 " src={Images.Arrow} alt=""/> */}
        </div>
        <img className="union41" src={Images.Union_1} alt=""/>
        <div className=" union-2-set"></div>
        {/* <img className="unionbg" src={Images.Union_2} alt=""/> */}
      </div>
      <div className="Rectangle45-main">
        {/* <img className="svg45" src={Images.svg45} /> */}
      </div>
      
    </>
  );
};

export default Rectangle41;
