import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import './Explanations.css'


import illustration from './img/illustration.svg'
import triangle from './img/triangle.svg'
import logoPink from '../../img/wellSupPink.svg'

const Explanations = () => {

  const navigate = useNavigate()

  const [currentExplanation, setCurrentExplanation] = useState(0)

  const [dot1Active, setDot1Active] = useState(false);
  const [dot2Active, setDot2Active] = useState(true);
  const [dot3Active, setDot3Active] = useState(true);

  const explanationsArray = [
    {title:'1 - Découvre', p:'Nous avons une multitude de formations à te faire découvrir en fonction de tes préférences !'},
    {title:'2 - Swipe', p:'Nous allons te proposer différentes questions. Si elles correspondent à tes envies, swipe à droite. Si elles ne te correspondent pas, swipe à gauche !'},
    {title:'3 - Les résultats',p:'Grâce à tes réponses, nous calculons tes affinités pour te faire découvrir les formations qui te correspondent le plus. Elles apparaitrons à la fin des questions.'}
  ]

  let handleSkip = () =>{
    setCurrentExplanation(currentExplanation+1)
    if(currentExplanation==0){
      setDot1Active(true)
      setDot2Active(false)
      setDot3Active(true)
      console.log(currentExplanation,dot1Active,dot2Active,dot3Active)
    }else if(currentExplanation==1){
      setDot1Active(true)
      setDot2Active(true)
      setDot3Active(false)
    }else if(currentExplanation==2){
      navigate('/swipper-page')
    }
    console.log(currentExplanation,dot1Active,dot2Active,dot3Active)
  }

  

  return (
    <div className='explanations-container'>
        <h1>
          <img src={logoPink} alt='WellSup'/>
        </h1>
        <div className='illustration-container'>
            <img src={illustration} alt='Une illustration'/>
        </div>
        <div className='transition-container'>
            <img src={triangle} alt='a triangle'/>
        </div>
        <div className='text-container'>
            <h2>{explanationsArray[currentExplanation].title}</h2>
            <p>{explanationsArray[currentExplanation].p}</p>
            <div className='buttons-container'>
              <div className='dots-container'>
                <div className={dot1Active ? "dots" : "active"}></div>
                <div className={dot2Active ? "dots" : "active"}></div>
                <div className={dot3Active ? "dots" : "active"}></div>
              </div>
              <div className='skip-button'>
                  <span onClick={handleSkip}>Skip</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Explanations