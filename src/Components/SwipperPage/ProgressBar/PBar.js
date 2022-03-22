import React from 'react'
import './PBar.css'

import ProgressBar from "@ramonak/react-progress-bar";

const PBar = (props) => {


  return (
    <div className='progressbar-container'>
      <ProgressBar completed={props.sossur} bgColor={'#000000'} baseBgColor={'#EBEBEB'} labelAlignment={'outside'} labelColor={'#000000'} height={'10px'}/>
    </div>
  )
}

export default PBar;