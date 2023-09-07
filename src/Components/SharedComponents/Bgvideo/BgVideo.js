import React from "react";
import Images from "../../Images/images";
import "./Bgvideo.css";
import { Link } from "react-router-dom";

const BgVideo = (props) => {
  console.log(props, "peopa");
  return (
    <div className="">
      <div className="">
        <div className="">
          <img className="bg-video" src={props.bg} alt=""></img>
        </div>
        <div className="">
          <div>
            <Link to="/services" className="link">
              {" "}
              Services
            </Link>
            <span className="slash-link "> {props.name}</span>

            <hr className="line" />
            <h1 className="main-heading">
              {props.desc1}
              <br />
              {props.desc2} <br />
              {props.desc3}
            </h1>
            <p className="inner-desc">{props.desc4}</p>
            <b className="see-more">
              {props.see}
              <img className="ml-2" src={Images.Arrow} alt="" />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
