import React from 'react'
import MeetTeam from './MeetTeam'
import MeetPeoples from '../MeetPeoples/MeetPeoples'
import SuccessStories from '../Portfolio/SuccessStories'
import Testies from '../SharedComponents/Testies/Testies'
import Testimonial from '../Home/Testimonial'
import BigentitisContact from '../BigentitiesContact/BigentitisContact'

const Meet = () => {
  return (
    <>
    <MeetTeam />
    <MeetPeoples />
    <SuccessStories />
    <Testies Testimonial_Heading="See what our clients have to say about their experience with us."
    Testimonial_text="Don’t take our words for it. See what our client have to say about their experience with us."
    />
    <Testimonial />
    <BigentitisContact />
    </>
  )
}

export default Meet