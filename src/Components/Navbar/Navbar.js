import React from 'react'
import './Navbar.css'

import paramIcon from './img/paramIcon.svg'
import homeIcon from './img/homeIcon.svg'
import questionMarkIcon from './img/questionMark.svg'

import {NavLink} from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='navbar'>
        <NavLink to='/explanations'>
          <img src={questionMarkIcon} className='questionMarkIcon' alt='une icône' />
        </NavLink>
        <NavLink to='/'>
          <img src={homeIcon} className='homeIcon' alt='Un bouton Home'/>
        </NavLink>
        <NavLink to='/parametres' className='paramLink'>
          <img src={paramIcon} alt='Une roue dentée' className='paramIcon'  />
        </NavLink>
    </div>
  )
}

export default Navbar