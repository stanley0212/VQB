import React from 'react'
import './Feedback.css'
import SlickSlider from './SlickSlider'

const Feedback = () => {
  return (
    <div className='t-wrapper'>
      <div className='container'>
        <div className='t-container'>
          <div className='t-head'>
            <span className='tag'>AAA</span>
            <span className='title'>BBB</span>
            <span className='des'>CCC</span>
          </div>
        </div>
        {/* slider */}
        <SlickSlider />
      </div>
    </div>
  )
}

export default Feedback