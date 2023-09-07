import React from 'react'
import "./AboutUs.css";
import Images from '../Images/images';
import { Link } from 'react-router-dom';
// import Meet from '../MeetTeam/Meet';

const AboutUs = () => {
  return (
    <div className='about container '>
        <div className='row first-row'>
            <div className='col-md-6 col-sm-12 col-lg-4'>
                <p className='first_about_div'>
                Embark on a journey with us as we weave your dreams into  a tapestry of innovation.
                </p>
                <button className="Get_btn">
                Get in touch{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-4'>
           <Link to="/meetteam"> <div class='image-container'>
        <img src={Images.Meet_Our_Team} alt='' class='AboutUs_images'/>
        <div class='overlay_About'>
            <p className='heading_text'>Meet Our Team</p>
            <p className='simple_text'>Behold the fantastical fellowship of minds that form our extraordinary team!</p>
            <button className="learn-btn">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
    </div>
    </Link>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-4'>
           <Link to="/meetteam"> <div class='image-container'>
        <img src={Images.Our_Company} alt='' class='AboutUs_images'/>
        <div class='overlay_About'>
            <p className='heading_text'>Our Company</p>
            <p className='simple_text'>Where Innovation and Passion Unite: Unleashing the Future at Big Entities.</p>
            <button className="learn-btn">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
    </div>
    </Link>
            </div>
            

        </div>
        <div className='row second_row'>
        <div className='col-md-6 col-sm-12 col-lg-4'>
       <Link to="/meetteam"> <div class='image-container'>
        <img src={Images.Why_Choose_Us} alt='' class='AboutUs_images'/>
        <div class='overlay_About'>
            <p className='heading_text'>Why Choose Us</p>
            <p className='simple_text'>Unveil the art of cultivating unwavering trust – our secret to connecting hearts and minds.</p>
            <button className="learn-btn">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
    </div>
    </Link>
</div>
            <div className='col-md-6 col-sm-12 col-lg-4'>
            <Link to="/meetteam"><div class='image-container'>
        <img src={Images.Faqs} alt='' class='AboutUs_images'/>
        <div class='overlay_About'>
            <p className='heading_text'>FAQs</p>
            <p className='simple_text'>Any doubt? Look what we have to gain your trust.</p>
            <button className="learn-btn">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
    </div>
    </Link>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-4'>
           <Link to="/meetteam"> <div class='image-container'>
        <img src={Images.Our_Clients} alt='' class='AboutUs_images'/>
        <div class='overlay_About'>
            <p className='heading_text'>Our Clients</p>
            <p className='simple_text'>Unlocking boundless possibilities for our cherished clients.</p>
            <button className="learn-btn">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
  <g clip-path="url(#clip0_1968_296)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="#4A4AFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1968_296">
      <rect width="26" height="17" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
    </div>
    </Link>
            </div>

        </div>
    </div>
  )
}

export default AboutUs