import React from 'react'
import './HomePage.css'

import {NavLink} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <h1>Logo</h1>
      <div className='first-homepage-container'>
        <div className='start-test-container'>
          <h2>Questionnaire</h2>
          <p>Fais le quiz pour trouver la formation la plus adapter pour toi</p>
          <NavLink to='/explanations'>Commencer</NavLink>
        </div>
        <div className='tendance-container'>
            <h3>Tendance</h3>
            <p>L’école du digital HETIC, une nouvelle façon d’apprendre !</p>
        </div>
        <div className='commerce-container'>
            <h3>Commerce</h3>
            <p>Quelle formation choisir ?</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage