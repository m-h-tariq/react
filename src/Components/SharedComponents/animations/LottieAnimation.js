import React from 'react'
// import Lottie from 'react-lottie';
import animationData from '../../../../src/Second_animation.json';

const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        speed: 0.5, // Make the animation play at half speed
      };
  return (
    <>
     {/* <Lottie options={defaultOptions} /> */}
    </>
  )
}

export default LottieAnimation