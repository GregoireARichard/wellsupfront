import React from 'react'
import './Card.css'

const Card = (props) => {
  
  let handleClick = () =>{
    window.open(props.teamMember.link, '_blank');
  }

  return (
    <div className='card'>
      
      <div className='card-bg' onClick={handleClick}>
        <img src={props.teamMember.img}  />
        <h3>{props.teamMember.name}</h3>
        <h4>{props.teamMember.post}</h4>
      </div>
    </div>
  )
}

export default Card