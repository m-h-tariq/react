import React from "react";
import "./LatestProject.css";
import Images from "../../Images/images";


const LatestProjects = () => {
  return (
    <>



      <div className="latest-projects">
        <div className="project-main-heading text-center">Latest Projects</div>
        <div className="project-text ">
          Discover how Big Entities has delivered software solutions for
          businesses of all sizes, from startups to enterprise-level
          organizations. Explore our portfolio of successful projects.
        </div>
  
        
       

       
      <div>
        <div className="container">
        
      <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
  data-interval="false" 
>
  <div className="carousel-inner carousal_start ">
    <div  className="carousel-item active project_items">
      {/* <img className="d-block first-block w-100" src={Images.Youtube_Project} alt="First slide" />
       */}
       <div className="project-images row">
          <div className="div-field-force col-lg-4 col-md-6">
              <img
                src={Images.Field_Force_Project}
                alt=""
                className="field-force-img img-fluid"
              />
              <div class="overlay-project">
                <p className="field-force-description">
                  Say goodbye to manual processes and hello to a smarter, more
                  efficient sales management system with Field Force.Designed to
                  streamline and optimize your sales operations, Field Force
                  empowers your team with advanced tools and features to drive
                  productivity and maximize sales performance. With real-time
                  data insights, seamless communication, and robust reporting
                  capabilities... Read more
                </p>
              </div>
            
            <div className="overlay-button">
              <button className="field-force-button field_button">Fields force</button>
            </div>
          </div>

          <div className="div-instagram col-lg-4 col-md-6">
            <img
              src={Images.Instagram_Project}
              alt=""
              className="instagram-img img-fluid"
            />
            <div class="overlay-instagram">
              <p className="instagram-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations,... Read more
              </p>
            </div>
            <div className="overlay-button">
              <button className="field-force-button">Instagram</button>
            </div>
          </div>

          <div className="div-spotify col-lg-4 col-md-6">
            <img src={Images.Spotify_Project} alt="" className="spotify-img img-fluid" />
            <div class="overlay-spotify">
              <p className="spotify-description-text">
              Say goodbye to manual processes and hello to a smarter, more efficient sales management system with Field Force.Designed to streamline and optimize your sales operations. With real-time data insights, seamless communication, and robust reporting...Read more
              </p>
            </div>
            
              <button className="spotify-button">Spotify</button>
            
          </div>

          {/* <div className="div-youtube col-sm-6 col-md-4 col-lg-4">
            <img src={Images.Youtube_Project} alt="" className="youtube-img" />
            <div class="overlay-youtube">
              <p className="youtube-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations, Field Force
                empowers your team with advanced tools and features to drive
                productivity and maximize sales performance. With real-time data
                insights, seamless communication, and robust reporting
                capabilities... Read more{" "}
              </p>
            </div>
            <button className="spotify-button">Youtube</button>
          </div> */}
        </div>
    </div>
    <div className="carousel-item">
      {/* <img className="d-block first-block w-100" src={Images.Rectangle_129} alt="Second slide" /> */}
      <div className="project-images row">
          

          <div className="div-instagram col-lg-4 col-md-6">
            <img
              src={Images.Instagram_Project}
              alt=""
              className="instagram-img img-fluid"
            />
            <div class="overlay-instagram">
              <p className="instagram-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations,... Read more
              </p>
            </div>
            <div className="overlay-button">
              <button className="field-force-button">Instagram</button>
            </div>
          </div>

          <div className="div-spotify col-lg-4 col-md-6">
            <img src={Images.Spotify_Project} alt="" className="spotify-img" />
            <div class="overlay-spotify">
              <p className="spotify-description-text">
              Say goodbye to manual processes and hello to a smarter, more efficient sales management system with Field Force.Designed to streamline and optimize your sales operations. With real-time data insights, seamless communication, and robust reporting...Read more
              </p>
            </div>
            
              <button className="spotify-button">Spotify</button>
            
          </div>
          

          {/* <div className="div-youtube col-sm-6 col-md-4 col-lg-4">
            <img src={Images.Youtube_Project} alt="" className="youtube-img" />
            <div class="overlay-youtube">
              <p className="youtube-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations, Field Force
                empowers your team with advanced tools and features to drive
                productivity and maximize sales performance. With real-time data
                insights, seamless communication, and robust reporting
                capabilities... Read more{" "}
              </p>
            </div>
            <button className="spotify-button">Youtube</button>
          </div> */}
          <div className="div-field-force col-lg-4 col-md-6">
              <img
                src={Images.Field_Force_Project}
                alt=""
                className="field-force-img img-fluid"
              />
              <div class="overlay-project">
                <p className="field-force-description">
                  Say goodbye to manual processes and hello to a smarter, more
                  efficient sales management system with Field Force.Designed to
                  streamline and optimize your sales operations, Field Force
                  empowers your team with advanced tools and features to drive
                  productivity and maximize sales performance. With real-time
                  data insights, seamless communication, and robust reporting
                  capabilities... Read more
                </p>
              </div>
            
            <div className="overlay-button">
              <button className="field-force-button">Fields force</button>
            </div>
          </div>
        </div>
    </div>
    <div className="carousel-item">
      {/* <img className="d-block first-block w-100" src={Images.Instagram_Project} alt="Third slide" /> */}
      <div className="project-images row">
          <div className="div-field-force col-lg-4 col-md-6">
              <img
                src={Images.Field_Force_Project}
                alt=""
                className="field-force-img img-fluid"
              />
              <div class="overlay-project">
                <p className="field-force-description">
                  Say goodbye to manual processes and hello to a smarter, more
                  efficient sales management system with Field Force.Designed to
                  streamline and optimize your sales operations, Field Force
                  empowers your team with advanced tools and features to drive
                  productivity and maximize sales performance. With real-time
                  data insights, seamless communication, and robust reporting
                  capabilities... Read more
                </p>
              </div>
            
            <div className="overlay-button">
              <button className="field-force-button">Fields force</button>
            </div>
          </div>

          <div className="div-instagram col-lg-4 col-md-6">
            <img
              src={Images.Instagram_Project}
              alt=""
              className="instagram-img img-fluid"
            />
            <div class="overlay-instagram">
              <p className="instagram-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations,... Read more
              </p>
            </div>
            <div className="overlay-button">
              <button className="field-force-button">Instagram</button>
            </div>
          </div>

          <div className="div-spotify col-lg-4 col-md-6">
            <img src={Images.Spotify_Project} alt="" className="spotify-img" />
            <div class="overlay-spotify">
              <p className="spotify-description-text">
              Say goodbye to manual processes and hello to a smarter, more efficient sales management system with Field Force.Designed to streamline and optimize your sales operations. With real-time data insights, seamless communication, and robust reporting...Read more
              </p>
            </div>
            
              <button className="spotify-button">Spotify</button>
            
          </div>

          {/* <div className="div-youtube col-sm-6 col-md-4 col-lg-4">
            <img src={Images.Youtube_Project} alt="" className="youtube-img" />
            <div class="overlay-youtube">
              <p className="youtube-description">
                Say goodbye to manual processes and hello to a smarter, more
                efficient sales management system with Field Force.Designed to
                streamline and optimize your sales operations, Field Force
                empowers your team with advanced tools and features to drive
                productivity and maximize sales performance. With real-time data
                insights, seamless communication, and robust reporting
                capabilities... Read more{" "}
              </p>
            </div>
            <button className="spotify-button">Youtube</button>
          </div> */}
        </div>
    </div>
  </div>
  <a
    className="carousel-control-prev prev-button-design"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
   <svg className="first-svg" xmlns="http://www.w3.org/2000/svg" width="80%" height="79%" viewBox="0 0 80 79" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0424 6.10996C34.1334 2.84899 43.1331 2.63679 51.3688 5.51281C59.6044 8.38883 66.5156 14.1574 70.8177 21.7462C75.1197 29.335 76.5199 38.2277 74.7579 46.7713C72.996 55.3149 68.1918 62.9281 61.2384 68.1957C54.2849 73.4632 45.6554 76.0268 36.9538 75.4099C28.2523 74.7929 20.0708 71.0374 13.9302 64.8414C7.78953 58.6455 4.10755 50.4306 3.56868 41.7239C3.0298 33.0171 5.6707 24.4109 11.0004 17.505C11.5066 16.8492 11.3852 15.9072 10.7294 15.4011C10.0736 14.895 9.13162 15.0163 8.62548 15.6721C2.85159 23.1535 -0.00937093 32.4769 0.574401 41.9092C1.15818 51.3415 5.147 60.2409 11.7994 66.9532C18.4517 73.6655 27.315 77.734 36.7417 78.4024C46.1683 79.0707 55.517 76.2935 63.0499 70.587C70.5828 64.8804 75.7873 56.6328 77.6961 47.3773C79.6049 38.1217 78.088 28.4879 73.4275 20.2667C68.767 12.0455 61.2798 5.79623 52.3579 2.68054C43.4359 -0.435144 33.6861 -0.205267 24.921 3.32745C24.1526 3.63714 23.7807 4.51107 24.0904 5.27944C24.4001 6.0478 25.274 6.41964 26.0424 6.10996Z" fill="#4C4CFF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5606 25.4393C31.9749 24.8536 31.0251 24.8536 30.4393 25.4393L17.7114 38.1673C17.4301 38.4486 17.2721 38.8301 17.2721 39.2279C17.2721 39.6258 17.4301 40.0073 17.7114 40.2886L30.4393 53.0165C31.0251 53.6023 31.9749 53.6023 32.5606 53.0165C33.1464 52.4307 33.1464 51.481 32.5606 50.8952L22.3934 40.7279L59.5 40.7279C60.3284 40.7279 61 40.0563 61 39.2279C61 38.3995 60.3284 37.7279 59.5 37.7279L22.3934 37.7279L32.5606 27.5607C33.1464 26.9749 33.1464 26.0251 32.5606 25.4393Z" fill="#4C4CFF"/>
</svg>
  </a>
  <a
    className="carousel-control-next next-button-design"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
   <svg className="second-svg" xmlns="http://www.w3.org/2000/svg" width="80%" height="79%" viewBox="0 0 80 79" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.9576 6.10996C45.8666 2.84899 36.8669 2.63679 28.6312 5.51281C20.3956 8.38883 13.4844 14.1574 9.18232 21.7462C4.88028 29.335 3.4801 38.2277 5.24205 46.7713C7.00401 55.3149 11.8082 62.9281 18.7616 68.1957C25.7151 73.4632 34.3446 76.0268 43.0462 75.4099C51.7477 74.7929 59.9292 71.0374 66.0698 64.8414C72.2105 58.6455 75.8924 50.4306 76.4313 41.7239C76.9702 33.0171 74.3293 24.4109 68.9996 17.505C68.4934 16.8492 68.6148 15.9072 69.2706 15.4011C69.9264 14.895 70.8684 15.0163 71.3745 15.6721C77.1484 23.1535 80.0094 32.4769 79.4256 41.9092C78.8418 51.3415 74.853 60.2409 68.2006 66.9532C61.5483 73.6655 52.685 77.734 43.2583 78.4024C33.8317 79.0707 24.483 76.2935 16.9501 70.587C9.41724 64.8804 4.21267 56.6328 2.30388 47.3773C0.3951 38.1217 1.91196 28.4879 6.5725 20.2667C11.233 12.0455 18.7202 5.79623 27.6421 2.68054C36.5641 -0.435144 46.3139 -0.205267 55.079 3.32745C55.8474 3.63714 56.2193 4.51107 55.9096 5.27944C55.5999 6.0478 54.726 6.41964 53.9576 6.10996Z" fill="#4C4CFF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4394 25.4393C48.0251 24.8536 48.9749 24.8536 49.5607 25.4393L62.2886 38.1673C62.5699 38.4486 62.7279 38.8301 62.7279 39.2279C62.7279 39.6258 62.5699 40.0073 62.2886 40.2886L49.5607 53.0165C48.9749 53.6023 48.0251 53.6023 47.4394 53.0165C46.8536 52.4307 46.8536 51.481 47.4394 50.8952L57.6066 40.7279L20.5 40.7279C19.6716 40.7279 19 40.0563 19 39.2279C19 38.3995 19.6716 37.7279 20.5 37.7279L57.6066 37.7279L47.4394 27.5607C46.8536 26.9749 46.8536 26.0251 47.4394 25.4393Z" fill="#4C4CFF"/>
</svg>
  </a>
</div>

</div>

      </div>
       <hr className="explore-hr"></hr>
       <button type="button" class="btn btn-primary explore-button">Explore our offer </button>

        <hr className="second-hr"></hr>
      </div>
    </>
  );
};

export default LatestProjects;
