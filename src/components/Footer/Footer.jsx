import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { Link } from 'react-scroll'

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
                    <Link to='wwd-wrapper' spy={true} smooth={true}><span>What we do</span></Link>
                        <Link to='hiw-wrapper' spy={true} smooth offset={100}><span>How it Works</span></Link>
                        <Link to='wwi-wrapper' spy={true} smooth><span>Who are we cooperate</span></Link>
                        <Link to='t-wrapper' spy={true} smooth offset={100}><span>Feedback</span></Link>
                </div>
                <hr />
                <span className='text'>Made with JJJ Bros Pty Ltd</span>
            </div>
        </div>
    </div>
  )
}

export default Footer