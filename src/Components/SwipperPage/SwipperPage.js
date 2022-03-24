import React, {useState} from 'react'
import Select from 'react-select'

import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import cancel from './img/cancel.svg'
import validate from './img/validate.svg'

import logoPink from '../../img/wellSupPink.svg'

const SwipperPage = () => {

  const [themeChosen, setThemeChosen] = useState(null)

    const options = [
      { value: 'Agriculture', label: 'Agriculture' },
      { value: 'Architecture/Urbanisme', label: 'Architecture/Urbanisme' },
      { value: 'Banque/Assurance', label: 'Banque/Assurance' },
      { value: 'Traduction/Interprétation', label: 'Traduction/Interprétation' },
      { value: 'Communication/Journalisme', label: 'Communication/Journalisme' },
      { value: 'Audio visuel/Édition', label: 'Audio visuel/Édition' },
      { value: 'Bâtiments/Travaux publics', label: 'Bâtiments/Travaux publics' },
      { value: 'Droit/Eco/Gestion', label: 'Droit/Eco/Gestion' },
      { value: 'Enseignement', label: 'Enseignement' },
      { value: 'Hôtellerie/Restauration/Tourisme', label: 'Hôtellerie/Restauration/Tourisme' },
      { value: 'Art/Mode', label: 'Art/Mode' },
      { value: 'Industrie/Ingénieur', label: 'Industrie/Ingénieur' },
      { value: 'Informatique/Internet/Web', label: 'Informatique/Internet/Web' },
      { value: 'Commerce/Marketing', label: 'Commerce/Marketing' },
      { value: 'Medical/Social/Sport', label: 'Medical/Social/Sport' }
    ]

    const [sectionActive, setSectionActive] = useState(true)  

    let handleThemeChange = (e) => {
      setThemeChosen(e.value)
    }

    let swapDisplay = () =>{
      if(themeChosen != null){
        setSectionActive(!sectionActive)
      }
      
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
            <Select options={options} placeholder='Choisissez un thème' onChange={handleThemeChange} />
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
                <h3>{themeChosen}</h3>
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