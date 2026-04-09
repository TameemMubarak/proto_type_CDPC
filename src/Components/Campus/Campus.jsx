import React from 'react'
import './Campus.css'

import p1 from '../../assets/gallery-1.png'
import p2 from '../../assets/gallery-2.png'
import p3 from '../../assets/gallery-3.png'
import p4 from '../../assets/gallery-4.png'
import whitearow from '../../assets/white-arrow.png'
 

const Campus = () => {
  return (
   // this is campus component in jsx 
    <div className='campus'>
      <div className="gallery">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
      </div>
      <button className='btn dark-btn'>see more <img src={whitearow} alt="" /></button>
    </div>
  )
}

export default Campus
