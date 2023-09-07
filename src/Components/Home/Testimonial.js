import React from 'react';
import "./Testimonial.css";
import Images from '../Images/images';

const Testimonial = () => {
  return (
    <div className='testimonial '>
        <div
          id="carouselExampleControls2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="back-div"></div>
          <div className="back2-div"></div>

          <div className="carousel-inner">
            <div className="carousel-item active carousel-div ">
              <p
                className="description
"
              >
                "I recently had the pleasure of working with Big Entities on a
                software development project for my business, and I couldn't be
                happier with the results. I highly recommend Big Entities to
                anyone looking for an IT partner that can deliver innovative
                technology solutions and exceptional customer service."
                <br />
                <span className="name">Benjamin James</span>
                <br />
                <span className="sub_name">CEO, Beyond Labs</span>
              </p>
              <img className="Vector3" src={Images.Vector3} />
              <img className="Vector2" src={Images.Vector2} />
              <img
                src={Images.Benjamin}
                width={207}
                height={207}
                className="d-block "
                alt="..."
              />
            </div>

            <div className="carousel-item carousel-div  ">
              <p className="description">
                "I recently had the pleasure of working with Big Entities on a
                software development project for my business, and I couldn't be
                happier with the results. I highly recommend Big Entities to
                anyone looking for an IT partner that can deliver innovative
                technology solutions and exceptional customer service."
                <br />
                <span className="name">Benjamin James</span>
                <br />
                <span className="sub_name">CEO, Beyond Labs</span>
              </p>
              <img className="Vector3" src={Images.Vector3} />
              <img className="Vector2" src={Images.Vector2} />
              <img
                src={Images.Celia}
                width={207}
                height={207}
                className="d-block "
                alt="..."
              />
            </div>

            <div className="carousel-item carousel-div">
              <p className="description">
                "I recently had the pleasure of working with Big Entities on a
                software development project for my business, and I couldn't be
                happier with the results. I highly recommend Big Entities to
                anyone looking for an IT partner that can deliver innovative
                technology solutions and exceptional customer service."
                <br />
                <span className="name">Celia Mery</span>
                <br />
                <span className="sub_name">CTO, Olivers</span>
              </p>

              <img className="Vector3" src={Images.Vector3} />
              <img className="Vector2" src={Images.Vector2} />
              <img
                src={Images.John}
                width={207}
                height={207}
                className="d-block "
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev left-button"
            href="#carouselExampleControls2"
            role="button"
            data-slide="prev"
          >
            <span className="right">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_5_296)">
                  <path
                    d="M34.8 43.5C35.25 43.5 35.55 43.35 35.85 43.05C36.45 42.45 36.45 41.55 35.85 40.95L24.9 30L35.85 19.05C36.45 18.45 36.45 17.55 35.85 16.95C35.25 16.35 34.35 16.35 33.75 16.95L21.75 28.95C21.15 29.55 21.15 30.45 21.75 31.05L33.75 43.05C34.05 43.35 34.5 43.5 34.8 43.5Z"
                    fill="#3A1078"
                  />
                  <path
                    d="M30 60C46.5 60 60 46.5 60 30C60 13.5 46.5 0 30 0C23.25 0 16.95 2.25 11.55 6.3C10.95 6.75 10.8 7.8 11.25 8.4C11.7 9 12.75 9.15 13.35 8.7C18.15 4.95 24 3 30 3C44.85 3 57 15.15 57 30C57 44.85 44.85 57 30 57C15.15 57 3 44.85 3 30C3 25.2 4.35 20.4 6.75 16.2C7.2 15.45 6.9 14.55 6.3 14.1C5.55 13.65 4.65 13.95 4.2 14.55C1.5 19.35 0 24.6 0 30C0 46.5 13.5 60 30 60Z"
                    fill="#3A1078"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_296">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="matrix(-1 0 0 1 60 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {/* <img src={Images.SliderIconRIght} /> */}
            </span>
          </a>
          <a
            className="carousel-control-next right-button"
            href="#carouselExampleControls2"
            role="button"
            data-slide="next"
          >
            <span />
            <svg
              className="left"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g clip-path="url(#clip0_5_299)">
                <path
                  d="M25.2 43.5C24.75 43.5 24.45 43.35 24.15 43.05C23.55 42.45 23.55 41.55 24.15 40.95L35.1 30L24.15 19.05C23.55 18.45 23.55 17.55 24.15 16.95C24.75 16.35 25.65 16.35 26.25 16.95L38.25 28.95C38.85 29.55 38.85 30.45 38.25 31.05L26.25 43.05C25.95 43.35 25.5 43.5 25.2 43.5Z"
                  fill="#3A1078"
                />
                <path
                  d="M30 60C13.5 60 0 46.5 0 30C0 13.5 13.5 0 30 0C36.75 0 43.05 2.25 48.45 6.3C49.05 6.75 49.2 7.8 48.75 8.4C48.3 9 47.25 9.15 46.65 8.7C41.85 4.95 36 3 30 3C15.15 3 3 15.15 3 30C3 44.85 15.15 57 30 57C44.85 57 57 44.85 57 30C57 25.2 55.65 20.4 53.25 16.2C52.8 15.45 53.1 14.55 53.7 14.1C54.45 13.65 55.35 13.95 55.8 14.55C58.5 19.35 60 24.6 60 30C60 46.5 46.5 60 30 60Z"
                  fill="#3A1078"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_299">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* <img className="left" src={Images.SliderIconRIght} /> */}
          </a>
        </div>
        

    </div>
  )
}

export default Testimonial