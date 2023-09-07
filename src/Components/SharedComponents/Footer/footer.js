import React from "react";
import "./footer.css";
import Images from "../../Images/images";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <div className="footermainbody">
        <div className="">
          <div className="row p">
            <div className="col-lg-3 col-md-6 footerdata1">
              <div className="footerdata11">
                <div className="footerdata1head">
                  {" "}
                  <img src={Images.Big_Logo} alt=""/>
                </div>
                <div className="footerdata1sub">
                  Crafting Digital Excellence, Redefining Possibilities
                </div>
                <div className="footerdata1images">
                  <Link to="/">
                    {" "}
                    <img src={Images.Linkedin_footer} className="me-3 mr-1" alt=""/>
                  </Link>
                  <Link to="/">
                    {" "}
                    <img src={Images.Instagram_footer} className="me-3 " alt=""/>
                  </Link>
                  <Link to="/">
                    {" "}
                    <img src={Images.Facebook_footer} className="me-3" alt=""/>
                  </Link>
                  <Link to="/">
                    {" "}
                    <img src={Images.Twitter_footer} className="me-3" alt=""/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footerdata2">
              <div className="footerdata2head">Services</div>
              <div className="footerdata2list">
                <Link to="/">
                  <li className="footerdata2li footerdataai">Artificial Intelligence</li>
                </Link>
                <Link to="/">
                  <li className="footerdata2li footerdataui">UI/UX Design</li>
                </Link>
                <Link to="/home">
                  <li className="footerdata2li footerdata_web_dev">Web Development</li>
                </Link>
                <Link to="/">
                  <li className="footerdata2li footerdata_mobile_dev">Mobile Development</li>
                </Link>
                <Link to="/">
                  <li className="footerdata2li footerdata_chain_dev">Blockchain Development</li>
                </Link>
                <Link to="/">
                  <li className="footerdata2li footerdata_consultancy">Software Consultancy</li>
                </Link>
                <Link to="/home">
                  <li className="footerdata2li footerdata_dev_ops">DevOps Solutions</li>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer_main_class">
              <div className="footerdata3head">Porfolio</div>
              <div className="footerdata3list">
                <Link to="/">
                  <li className="footerdata3li">Spotify</li>
                </Link>
                <Link to="/">
                  <li className="footerdata3li">Instagram</li>
                </Link>
                <Link to="/">
                  <li className="footerdata3li">Airbnb</li>
                </Link>
                <Link to="/">
                  <li className="footerdata3li">Google Maps</li>
                </Link>
                <Link to="/">
                  <li className="footerdata3li">Trello</li>
                </Link>
                <Link to="/">
                  <li className="footerdata3li">Headspace</li>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 Quick_links">
              <div className="footerdata4head">Quick Links</div>
              <div className="footerdata4list">
                <Link to="/">
                  <li className="footerdata4li">About Us</li>
                </Link>
                <Link to="/">
                  <li className="footerdata4li">FAQs</li>
                </Link>
                <Link to="/">
                  <li className="footerdata4li">Terms of Services</li>
                </Link>
                <Link to="/">
                  <li className="footerdata4li">Privacy Policy</li>
                </Link>
                <Link to="/">
                  <li className="footerdata4li">Careers</li>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 contact_class">
              <div className="footerdata5head">Contact</div>
              <div className="footerdata5list">
                <li className="footerdata5li">
                  <img
                    src={Images.Address}
                    className="footercontactimg" alt="" 
                  />
                  <div>Arfa Software Technology Park, Lahore, Pakistan</div>
                </li>
                <li className="footerdata5li">
                  <img src={Images.Email_Big} className="footercontactimg" alt=""/>
                  <span className="email_contact" >info@bigentities.com</span>
                </li>
                <li className="footerdata5li">
                  <img src={Images.Phone_Contact} className="footercontactimg" alt=""/>
                  +92-321-741-7482
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerendcontent">
        Copyright © 2021-2023 bigentities.com. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
