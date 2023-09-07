import React from "react";

import Images from "../Images/images";
import "./HomeSlider.css";
import { useState, useEffect } from 'react';
const HomeSlider = () => {
  const words = ['ev', 'esign']; // Words to type
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const typeInterval = 200; // Time interval for typing characters
    const deleteInterval = 200; // Time interval for deleting characters
    const pauseInterval = 1500; // Pause after each word
    
    const typeOrDelete = () => {
      const isTypedOut = !isDeleting && currentText === currentWord;
      
      if (isTypedOut) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
      
      const nextText = isDeleting
        ? currentText.slice(0, -1)
        : currentWord.slice(0, currentText.length + 1);
      
      setCurrentText(nextText);
    };
    
    const timeout = isDeleting ? deleteInterval : typeInterval;
    const timer = setTimeout(typeOrDelete, timeout);
    
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);
  
  return (
    <>
    {/* <h1 className="text-software"> Software</h1>  */}
       
      <div className="Slider-up-div">
      
        <div className="main-text-div "> 
         
        <h1 className="text-software"> Software</h1> 
          <div className="typewriter">
       <div className="set-content">
       <span className="type_text"> D{currentText}</span>
       {isDeleting && <span className="cursor">|</span>}
     </div>
     </div>
          
           <>
           <main class="containerr"> 
             
             


            <section class="animation">
                <div class="first">
                  
                   <h1 className="set-one"> Software IT <span style={{color:"blue"}}>outsourcing <br></br></span> <span className="set-this-text">Providing only high quality services</span> {" "}</h1>
                  
                  
                </div>
                <div class="second">
                  <h1 className="set-one"> We create leading digital products <br></br> End-to-End {" "}  <span style={{color:"blue"}}>development</span></h1>
                </div>
                <div class="third">
                  <div className="">
                  <h1 className="set-one"> Full cycle  <span style={{color:"blue"}}>software development <br></br></span> <span className="set-this-text">from idea to product</span> {" "}</h1>
                  </div>
                </div>
                {/* <div class="forth">
                <h1> <div>Systems Engineer</div></h1>
                </div> */}
              </section>

            </main> 
           </> 
         
        </div>
        
        
        <div
  className="carousel slide"
  data-ride="carousel"
  // data-interval="3000" // Set your desired interval in milliseconds
  // data-pause="hover"
  // data-wrap="true" // Loop the carousel
>
    <div className="carousel-item active">
    <div className="upper_overlay"></div>
      {/* <video
        className="bg-video"
        src={Images.Bghome}
        autoPlay
        loop
        muted
      ></video> */}
     <img class=" w-100" src={Images.Second_img} alt="First slide"/>
      
    </div>

    <div className="carousel-item">
    
    <div className="upper_overlay"></div>
      {/* <video
      
        className="bg-video "
        src={Images.Employee}
        autoPlay
        loop
        muted
      ></video> */}
      <img class=" w-100" src={Images.First_img} alt="First slide"/>
      </div>
    
    <div className="carousel-item">
    <div className="upper_overlay"></div>
      {/* <video
        className="bg-video"
        src={Images.Bgone}
        autoPlay
        loop
        muted
      ></video> */}
      <img class=" w-100" src={Images.Third_img} alt="First slide"/>
      </div>
      <div className="carousel-item">
    <div className="upper_overlay"></div>
      {/* <video
        className="bg-video"
        src={Images.Bgone}
        autoPlay
        loop
        muted
      ></video> */}
      <img class=" w-100" src={Images.Fourth_img} alt="First slide"/>
      </div>
      <div className="carousel-item">
    <div className="upper_overlay"></div>
      {/* <video
        className="bg-video"
        src={Images.Bgone}
        autoPlay
        loop
        muted
      ></video> */}
      <img class=" w-100" src={Images.Fifth_img} alt="First slide"/>
      </div>
      </div>
    </div>


      
    </>
  );
};

export default HomeSlider;
