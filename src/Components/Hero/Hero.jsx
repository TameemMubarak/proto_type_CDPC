import React from 'react'
import './Hero.css'
import xplore from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    // the fragments concept <> ... </> for single DOM Tree Model
    <>
    <div className='hero'>
      <div className="hero-text">
        <h1>we ensure better education for a better world</h1>
        <p>our cutting edge curriculum is designed to empower the students with 
            knowledge,skills,and experiences needed to excel in the dynamic field of 
            education.
        </p>
        <button className='btn btn2'>Explore More
            <img src={xplore} className='imgarrow' alt='explore ' />
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Hero
