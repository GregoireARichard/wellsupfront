import React from 'react'
import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

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
          <div className='sossur1'>PANE 1</div>
          <div className='sossur2'>PANE 2</div>
          <div className='sossur3'>PANE 3</div>
        </ReactSwipe>
        <div className='button-container'>
            <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            <button onClick={() => reactSwipeEl.next()}>Next</button>
        </div>
      </div>
    );
}

export default SwipperPage