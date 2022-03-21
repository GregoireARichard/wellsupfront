import React from 'react'
import './PBar.css'

import ProgressBar from "@ramonak/react-progress-bar";

const PBar = () => {
  return (
    <div className='progressbar-container'>
      <ProgressBar completed={12} bgColor={'#000000'} baseBgColor={'#EBEBEB'} labelAlignment={'outside'} labelColor={'#000000'} height={10}/>
    </div>
  )
}

export default PBar;