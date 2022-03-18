import React from 'react'
import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

const SwipperPage = () => {
    let reactSwipeEl;

    return (
      <div className='swipper-page'>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        <div className='button-container'>
            <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            <button onClick={() => reactSwipeEl.next()}>Next</button>
        </div>
      </div>
    );
}

export default SwipperPage