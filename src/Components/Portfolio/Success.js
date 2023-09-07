import React from 'react'
import SuccessStories from './SuccessStories'
import Testimonial from '../Home/Testimonial'
import LottieAnimation from '../SharedComponents/animations/LottieAnimation'
import BigentitisContact from '../BigentitiesContact/BigentitisContact'
import Testies from '../SharedComponents/Testies/Testies'


const Success = () => {
  return (
    <>
    <SuccessStories />
    <Testies Testimonial_Heading="Testimonials"
    Testimonial_text="Don’t take our words for it. See what our client have to say about their experience with us."
    />
    <Testimonial />
    <BigentitisContact />
    {/* <LottieAnimation /> */}
    </>
  )
}

export default Success