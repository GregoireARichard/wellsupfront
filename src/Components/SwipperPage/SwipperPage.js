import React from 'react'
import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

const SwipperPage = () => {
    let reactSwipeEl;
    let currentSlide;
    let oldSlide;

    return (
      <div className='swipper-page'>
        <ReactSwipe
          className="carousel"
          swipeOptions={{
               continuous: true,
               startSlide:1,
               callback: (index,elem)=>{
                console.log(index, elem)
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