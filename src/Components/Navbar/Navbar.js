import React from 'react'
import './Navbar.css'

import paramIcon from './img/paramIcon.svg'

import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/swipper-page'>Sossur</NavLink>
        <NavLink to='/parametres' className='paramLink'>
          <img src={paramIcon} alt='Une roue dentée'/>
        </NavLink>
    </div>
  )
}

export default Navbar