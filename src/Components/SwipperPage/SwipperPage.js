import React from 'react'
import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import dislike from './img/dislike.svg'
import like from './img/like.svg'
import ProgressBar from './ProgressBar/PBar.js'

const SwipperPage = () => {

    let reactSwipeEl;
    let indexOnSlide;
    
    let onSlide = (e) =>{
      console.log(e)
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
                  onSlide(indexOnSlide)
                }else if(indexOnSlide===2){
                  onSlide(indexOnSlide)
                }
                reactSwipeEl.slide(1,0)
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
            <div className='dislike-button-container' onClick={()=>reactSwipeEl.next()} >
              <img src={dislike} alt='a dislike button'/>
            </div>
            <div className='like-button-container' onClick={()=>reactSwipeEl.prev()}>
              <img src={like} alt='a like button' />
            </div>
        </div>
        <ProgressBar/>
      </div>
    );
}

export default SwipperPage