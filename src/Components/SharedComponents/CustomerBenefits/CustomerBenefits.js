import React from 'react'
import BigentitisContact from '../../BigentitiesContact/BigentitisContact';
import "./CustomerBenefits.css"

const CustomerBenefits = (props) => {
  return (
    <>
    <div className="services-div4">
    <div className="container-fluid">
      <div className="row">
        <div className=" col-lg-8 col-md-12 col-md-12 col-12">
          <div className="sixth-div">
            <span className="third-span1 ">
              {props.Heading_Start}
            </span>{" "}
            {props.Heading_second_text}{" "}
            <span className="forth-span">{props.Heading_third_text}</span>{" "}
            <span className="third-span">{props.Heading_forth_text}</span>
          </div>
          <div className="tenth-div ">
            <div className="eighth-div ">
            {props.Paragraph_text}
            </div>
            <div className="ninth-div-parent">
            <div className="ninth-div" style={{ backgroundImage: `url(${props.BgImage})`, backgroundSize: 'cover' }}>


            </div>
              {/* <img src={Images.Rectangle_129} alt="" className="rectangle-zoom"/> */}
              <div className="eleventh-div">
                <div className="eleventh-div1">{props.Users_value}</div>
                <div className="eleventh-div2">{props.Users}</div>
              </div>
            
            </div>
          </div>
        </div>
        <div className="seventh-div col-lg-4 ">
          <img src={props.Union_svg} className="seventh-div-img" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="twelve-div">
    <p className='twelve-div-text'>{props.Tech_stack}</p>
    <div className='all-logos'>
      {props.data && props.data.map((row)=>(
        <div className={row.class}> <p className="logos-text">{row.text}</p></div>
      ))}
    </div>
    
    
    
  </div>
 <BigentitisContact />
  </>
  )
}

export default CustomerBenefits