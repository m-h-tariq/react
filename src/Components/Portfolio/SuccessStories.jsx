import React from "react";
import "./SuccessStories.css";
import Images from "../Images/images";
// import Testies from "../SharedComponents/Testies/Testies";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  return (
    <>
      <div className="success-story text-center">
        <img src={Images.Success_union} alt="" className="first-vector"/>
        <div className="success_heading">
        <p>A Look into Big Entities' </p>
        <p> Project Success Stories</p>
        </div>
      </div>
      <div className="d-flex main-container">
       <div className=" div-same">
        <img src={Images.Spotify_component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Spotify</p>
            <p className="spotify-description">
              Spotify is a popular music streaming platform that allows users to
              access millions of songs, create playlists, discover new music,
              and enjoy personalized recommendations.
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        
        </div>
        <div className="second-box div-same">
          <img src={Images.Instagram_Component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Instagram</p>
            <p className="spotify-description">
              Instagram is a social media platform focused on sharing photos and
              videos. It offers various features like filters, stories, direct
              messaging, and a vast network of users.
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="third-box div-same">
          <img src={Images.Airbnb_Component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Airbnb</p>
            <p className="spotify-description">
              Airbnb is an online marketplace that connects travelers with hosts
              offering unique accommodations around the world.
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex main-container mt-5">
        <div className=" div-same">
          <img src={Images.GoogleMap_Component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Google maps</p>
            <p className="spotify-description">
              Google Maps is a widely-used navigation app that provides
              real-time GPS-based directions, traffic updates, and information
              about local businesses.
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="second-box div-same">
          <img src={Images.Trello_Component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Trello</p>
            <p className="spotify-description">
              Trello is a project management tool that helps teams collaborate
              and organize their work. It utilizes a board and card system,
              allowing users to create tasks, assign team members.
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="third-box div-same">
          <img src={Images.HeadSpace_Component} alt="" className="first-box" />
          <div class="overlay">
            <p className="spotify-heading">Headspace</p>
            <p className="spotify-description">
              Headspace is a meditation and mindfulness app designed to help
              users reduce stress, improve focus, and practice self-care. It
              offers guided meditation sessions, breathing exercises, sleep
              aids, and other
            </p>
            <button className="learn-more">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
              >
                <path
                  d="M1.33301 7.5H22.6663M22.6663 7.5L14.6663 1.5M22.6663 7.5L14.6663 13.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="portfolio-testimonial">
      {/* <Testies Testimonial_Heading="See what our clients have to say about their experience with us."
    Testimonial_text="Don’t take our words for it. See what our client have to say about their experience with us."
    /> */}
    </div>
    </>
  );
};

export default SuccessStories;
