import React, {useState} from 'react'


import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import dislike from './img/dislike.svg'
import like from './img/like.svg'
import ProgressBar from './ProgressBar/PBar.js'

const SwipperPage = () => {

    let reactSwipeEl;
    let indexOnSlide;

    let userChoice = []
    let [currentState, setCurrentState] = useState(0)

    let handleTaskBar = () => {
      console.log(currentState,userChoice)
    }


    let likedQuestion = () =>{    
        userChoice.push(true)
        reactSwipeEl.prev()
        handleTaskBar()
    }

    let dislikedQuestion = () =>{
        
        userChoice.push(false)
        reactSwipeEl.next()
        handleTaskBar()
    }


    return (
      <div className='swipper-page'>
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
                reactSwipeEl.slide(1,150)
               },
               
            }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className='sossur1'>
            
          </div>
          <div className='question-card-container'>
            <div className='question-card'>

            </div>
          </div>
          <div className='sossur3'>

          </div>
        </ReactSwipe>
        <div className='button-container'>
            <div className='dislike-button-container' onClick={dislikedQuestion} >
              <img src={dislike} alt='a dislike button'/>
            </div>
            <div className='like-button-container' onClick={likedQuestion}>
              <img src={like} alt='a like button' />
            </div>
        </div>
        <ProgressBar sossur={currentState}/>
      </div>
    );
}

export default SwipperPage