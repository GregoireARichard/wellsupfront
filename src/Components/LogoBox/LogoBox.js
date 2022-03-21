import React from 'react'
import './LogoBox.css'
import infoIcon from './img/infoIcon.svg'

export const LogoBox = () => {
  return (
    <div className='logoBox'>
        
        <h1>Logo</h1>
        <img src={infoIcon} alt='Le logo de Wellsup' className='infoIcon'/>
    </div>
  )
}
