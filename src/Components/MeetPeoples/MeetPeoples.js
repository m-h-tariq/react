import React from "react";
import "./MeetPeoples.css";
import Images from "../Images/images";

const MeetPeoples = () => {
  return (
    <>
      <img
        src={Images.Meet_People_Vector}
        alt=""
        className="meet_people_vector"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-6 col-lg-12">
            <p className="Meet_People">Meet our people</p>
          </div>
          <div className="col-md-12 col-sm-6 col-lg-12">
            <p className="Meet_People_Text">
              What if you had access to a team of smart entrepreneurs who had
              deep industry expertise and strategic advice, were passionately
              committed to your success, and knew your next big partner,
              customer or hire? That’s our Big-Team.
            </p>
          </div>
        </div>

        <div className="container meet_owner_images">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-lg-4 Images_Bg">
              <div className="CTO_img">
              <div class="overlay_On_image">
              <h3 className="Ceo_names">Faizan Mubashar</h3>
    <h5 className="posts">CEO+ Co-founder</h5>
  </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 Images_Bg">
              <div className="CEO_img">
              <div class="overlay_On_image">
              <h3 className="Ceo_names">Ammar Aslam</h3>
    <h5 className="posts">CEO+ Co-founder</h5>
  </div>
              </div>
              
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 Images_Bg">
              <div className="Business_Developer_img">
              <div class="overlay_On_image">
              <h3 className="Ceo_names">Talha Hassan</h3>
    <h5 className="posts">Bussiness Developer</h5>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetPeoples;
