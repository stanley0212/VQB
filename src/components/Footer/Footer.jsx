import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='container'>
            <div className='f-container'>
                <span className='title'>Ger Newsletter Today</span>
                <EmailBox />
                <hr />
                <div className='f-menu'>
                    <span>Home</span>
                    <span>what we do</span>
                    <span>how it works</span>
                    <span>who we cooperate</span>
                    <span>feedback</span>
                </div>
                <hr />
                <span className='text'>Made with JJJ Bros Pty Ltd</span>
            </div>
        </div>
    </div>
  )
}

export default Footer