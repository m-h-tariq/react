import React from "react";
import { Link } from "react-router-dom";
export const Services1 = (props) => {
  return (
    <div className="services-div1">
      <div className="first-div">
        <span className="first-span">
          <Link to="/services">Services</Link>
        </span>{" "}
        /{" "}
        <a>
          <span className="second-span">{props.name}</span>
        </a>
      </div>
      <hr />
      <div className="container-fluid services-div2">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-md-12 col-12 second-div">
            <div className="third-div">
              {props.heading1}
              <br />
              {props.heading2}
              <br />
              <p>{props.heading3}</p>
            </div>
            <div className="forth-div">{props.description}</div>
            <div className="btn btn-primary fifth-div">{props.seemore}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
