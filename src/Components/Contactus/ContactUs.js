import React from "react";
import "./ContactUs.css";
import Images from "../Images/images";
import { Link } from "react-router-dom";
import CustomerBenefits from "../SharedComponents/CustomerBenefits/CustomerBenefits";
import BigentitisContact from "../BigentitiesContact/BigentitisContact";
const ContactUs = () => {
  return (
    <>
      <div className="Contact_main">
        <img src={Images.Contact_vector} alt="" className="contact-vector" />
        <h1 className="contact-first-heading text-center">
          “Crafting{" "}
          <span className="digital-font-big">digital excellence,</span>{" "}
          <br></br> redefining possibilities”
        </h1>
        <img
          src={Images.Contact_main_image}
          alt=""
          className="contact_main_img"
        />
        <img
          src={Images.Contact_right_vector}
          alt=""
          className="contact_right-img"
        />
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-lg-6">
              <Link to="#" className="link_class">
                <div className="background-animate"></div>
                <div className="background-animate-two"></div>
                <p className="ask-heading">AskUs</p>
                <p className="ask-text">
                  Feel free to contact us and ask your queries, we are always
                  here to help you.
                </p>
                <span class="btnBefore"></span>
                <span class="btnAfter"></span>
                <img
                  src={Images.AskUs}
                  alt=""
                  className="contact-back-images"
                />
              </Link>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-6">
              <Link to="#" className="link_class">
              <div className="background-animate"></div>
                <div className="background-animate-two"></div>
                <p className="ask-heading">Visit Us</p>
                <p className="ask-text">
                  Arfa Software Technology Park, Lahore, Pakistan
                </p>
                <span class="btnBefore"></span>
                <span class="btnAfter"></span>
                <img
                  src={Images.Visit}
                  alt=""
                  className="contact-back-images"
                />
              </Link>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-lg-6">
              <Link to="#" className="link_class">
              <div className="background-animate"></div>
                <div className="background-animate-two"></div>
                <p className="ask-heading">Email Us</p>
                <p className="ask-text">connect@bigentities.com</p>
                <span class="btnBefore"></span>
                <span class="btnAfter"></span>
                <img
                  src={Images.Contact_Email}
                  alt=""
                  className="contact-back-images"
                />
              </Link>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-6">
              <Link to="#" className="link_class">
              <div className="background-animate"></div>
                <div className="background-animate-two"></div>
                <p className="ask-heading">Call Us</p>
                <p className="ask-text">
                +1(302) 321-4914
                </p>
                <span class="btnBefore"></span>
                <span class="btnAfter"></span>
                <img
                  src={Images.CallUs}
                  alt=""
                  className="contact-back-images"
                />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="find-location">Find us where we are</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.888320330674!2d74.3406678166002!3d31.475854515364325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693568774158!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="bigentities"
            referrerpolicy="no-referrer-when-downgrade"
            className="location-map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
