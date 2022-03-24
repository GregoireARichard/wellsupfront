import React, {useState} from 'react'


import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import cancel from './img/cancel.svg'
import validate from './img/validate.svg'

import logoPink from '../../img/wellSupPink.svg'

const SwipperPage = () => {

    const [sectionActive, setSectionActive] = useState(true)
    console.log(sectionActive)
    let sossur = 'sossurrr'

    let swapDisplay = () =>{
      let themeChosen = document.getElementById('theme-select').value
      setSectionActive(!sectionActive)

    }

    let reactSwipeEl;
    let indexOnSlide;

    let [userChoice, setUserChoice] = useState([])
    let [currentState, setCurrentState] = useState(0)

    let handleTaskBar = () => {
      console.log(currentState,userChoice)
    }


    let likedQuestion = () =>{ 
        setUserChoice(array => [...array, true])   
        setCurrentState(currentState+1)
        
        handleTaskBar()
    }

    let dislikedQuestion = () =>{
        setUserChoice(array => [...array, false])
        
        setCurrentState(currentState+1)
        
  
        handleTaskBar()
    }


    return (
      <div className='swipper-page'>
        <h1>
          <img src={logoPink} alt='WellSup'/>
        </h1>
        <div className={sectionActive ? "isActive" : "notActive"} id='choose-theme-container'>
          <div className='select-container'>
            <label >Choisissez un thème :</label>
            <select id='theme-select' name='theme-select'>
              <option value="Agriculture">Agriculture</option>
              <option value="Architecture/Urbanisme">Architecture/Urbanisme</option>
              <option value="Banque/Assurance">Banque/Assurance</option>
              <option value="Traduction/Interprétation">Traduction/Interprétation</option>
              <option value="Communication/Journalisme">Communication/Journalisme</option>
              <option value="Audio visuel/Édition">Audio visuel/Édition</option>
              <option value="Bâtiments/Travaux publics">Bâtiments/Travaux publics</option>
              <option value="Droit/Eco/Gestion">Droit/Eco/Gestion</option>
              <option value="Enseignement">Enseignement</option>
              <option value="Hôtellerie/Restauration/Tourisme">Hôtellerie/Restauration/Tourisme</option>
              <option value="Art/Mode">Art/Mode</option>
              <option value="Industrie/Ingénieur">Industrie/Ingénieur</option>
              <option value="Informatique/Internet/Web">Informatique/Internet/Web</option>
              <option value="Commerce/Marketing">Commerce/Marketing</option>
              <option value="Medical/Social/Sport">Medical/Social/Sport</option>
            </select>
          </div>
          <div className='swap-button' onClick={swapDisplay}>
            <span>Valider</span>
          </div>
        </div>
        <ReactSwipe
          className={sectionActive ? "notActive" : "isActive"}
          id='carousel'
          swipeOptions={{
               continuous: true,
               startSlide:1,
               transitionEnd: ()=>{
                indexOnSlide = reactSwipeEl.getPos()
                if(indexOnSlide===0){
                  dislikedQuestion()
                }else if(indexOnSlide===2){
                  likedQuestion()
                }
                
               },
               
            }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className='sossur1'>
            
          </div>
          <div className='question-card-container'>
            <div className='question-card'>
                <h3>{sossur}</h3>
                <div className='button-container'>
                  
                    <img src={cancel} alt='a dislike button' onClick={dislikedQuestion}/>
                  
                  
                    <img src={validate} alt='a like button' onClick={likedQuestion}/>
                  
              </div>
            </div>
          </div>
          <div className='sossur3'>

          </div>
          
        </ReactSwipe>
      </div>
    );
}

export default SwipperPage