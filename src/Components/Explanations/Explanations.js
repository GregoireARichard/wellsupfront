import React from 'react'
import './Explanations.css'

import illustration from './img/illustration.svg'
import triangle from './img/triangle.svg'

const Explanations = () => {
  return (
    <div className='explanations-container'>
        <h1>Logo</h1>
        <div className='illustration-container'>
            <img src={illustration} alt='Une illustration'/>
        </div>
        <div className='transition-container'>
            <img src={triangle} alt='a triangle'/>
        </div>
    </div>
  )
}

export default Explanations