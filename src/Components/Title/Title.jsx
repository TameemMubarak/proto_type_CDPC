import React from 'react'
import './Title.css'

const Title = ({sub,main}) => {
  return (
    <div className='title'>
      <p>{sub}</p>
      <h2>{main}</h2>
    </div>
  )
}

export default Title
