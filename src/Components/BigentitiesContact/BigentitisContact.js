import React from 'react'
import { Link } from 'react-router-dom'
import "./BigentitiesContact.css";
import Images from '../Images/images';

const BigentitisContact = (props) => {
  return (
    <>
     <div className='discuss-ideas'>
    <div className='discuss-ideas-text'>

    <div className="row">
        <div className='col-md-6 col-sm-12 col-lg-6'>
        <p className="discuss-ideas-heading">Have any idea in your mind?
        Let’s discuss</p>
        <p className='discuss-ideas-subheading'>Ping us here and our support team will get back to you within 24 hours</p>
        </div>
        <div className='col-md-6 col-sm-12 col-lg-6'>
            <div className='bigentities-contact'>
                <div className='background-effect'>

                </div>
                <div className='background-effect-two'>

                </div>
                <div className='background-effect-three'>

                </div>
                <div className='bigentities-contactus'>
                    <p className='write-email'>Email</p>
                    <p className='bigentities-email'>connect@bigentities.com</p>
                    <img src={Images.Copy} alt=''className='copy-text-img'/>
                    <img src={Images.Call_Vector} alt=''className='call-img'/>
                    <span className='bigentities-nmb'>+1 (302) 321-4914</span>
                    
                </div>
                <div className='contact-button'>
                    <div className='contact-button-text'>
                        <Link to="" className='contact-form'>Use Contact form</Link>
                        <Link className='Arrow-forward'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
        <g clip-path="url(#clip0_1349_762)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_1349_762">
            <rect width="26" height="17" fill="white"/>
          </clipPath>
        </defs>
      </svg></Link>
                    </div>
                    </div>
            </div>
        </div>
    </div>
       
    </div>
    </div>
   
    </>
  )
}

export default BigentitisContact