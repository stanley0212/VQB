import React from 'react'
import './EmailBox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'



const EmailBox = () => {
  return (
    <motion.div
    initial={{
      width: '.5rem',
      borderRadius: '100%'
    }}
    whileInView={{
      width:'70%',
      borderRadius: '999px',
      transform: {
        type:'easeOut',
        duration: 1
      }
    }}
    className='emailBox'>
        {/* icon */}
        <motion.div variants={containerVariants(0.6)} initial='offscreen' whileInView={'onscreen'} viewport={{once: true}}>
            <LuMail size={30} color='grey'/>
        </motion.div>

        {/* input */}
        <motion.input
        variants={containerVariants(0.7)} initial='offscreen' whileInView={'onscreen'} viewport={{once: true}}
        type='email' placeholder='Subscription Email' />
        
        {/* get funded button */}
        <motion.div
        variants={containerVariants(0.9)} initial='offscreen' whileInView={'onscreen'} viewport={{once: true}}
        className='getFunded'>Subscription</motion.div>
    </motion.div>
  )
}

export default EmailBox