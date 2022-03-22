import React from 'react'
import './Navbar.css'

import paramIcon from './img/paramIcon.svg'
import homeIcon from './img/homeIcon.svg'

import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'>
          <img src={homeIcon}/>
        </NavLink>
        <NavLink to='/swipper-page'>Sossur</NavLink>
        <NavLink to='/parametres' className='paramLink'>
          <img src={paramIcon} alt='Une roue dentée'/>
        </NavLink>
    </div>
  )
}

export default Navbar