import React from 'react'
import './Testies.css';

const Testies = (props) => {
  return (
    <>
    <div className='testimonial_color'>
    <p className='testimonial_heading '>{props.Testimonial_Heading}</p>
        <p className='testimonial_text text-center'>{props.Testimonial_text}</p>
        </div>
    </>
  )
}

export default Testies