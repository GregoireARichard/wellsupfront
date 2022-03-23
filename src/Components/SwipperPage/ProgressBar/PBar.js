import React from 'react'
import './PBar.css'

import ProgressBar from "@ramonak/react-progress-bar";

const PBar = (props) => {


  return (
    <div className='progressbar-container'>
      <ProgressBar completed={props.sossur} bgColor={'#FB8574'} baseBgColor={'#EBEBEB'} labelAlignment={'outside'} labelColor={'#FFFFFF'} height={'8px'}/>
    </div>
  )
}

export default PBar;