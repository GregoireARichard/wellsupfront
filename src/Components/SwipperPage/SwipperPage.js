import React, {useState} from 'react'


import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import cancel from './img/cancel.svg'
import validate from './img/validate.svg'

import logoPink from '../../img/wellSupPink.svg'

const SwipperPage = () => {

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
        <ReactSwipe
          className="carousel"
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
                <h3>Question</h3>
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