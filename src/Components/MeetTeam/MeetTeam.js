import React from 'react'
import "./MeetTeam.css";
import Images from '../Images/images';

const MeetTeam = () => {
  return (
    <>
    <div className='container first-container'>
        <div className='row'>
    <div className='col-md-6 col-sm-12 col-lg-9 Meet_Team_Main'>
        <p className='Team_Heading'>“We build bridges between <span style={{color:"rgba(102, 102, 255, 1)"}}>technology </span>
  and human”</p>
  <p className='Team_Text'>
  “We strive to revolutionize business,<br></br> elevate user experience, and pave the <br></br> way for a future of limitless possibilities.”
  </p>
    </div>
    <div className='col-md-6 col-sm-12 col-lg-3 '>
    <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-this">
    <div className="carousel-item active">
      <img className="c-block " src={Images.Meet_team_first_img} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="e-block" src={Images.Meet_team_second_img} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="e-block" src={Images.Meet_team_third_img} alt="Third slide" />
    </div>
  </div>
</div>

    </div>

    

    </div>
    </div>
    
    </>
  )
}

export default MeetTeam