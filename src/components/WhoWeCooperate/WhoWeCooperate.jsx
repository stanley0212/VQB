import React from 'react'
import './WhoWeCooperate.css'
import { whoWePooperate } from '@/src/utils/data'
import {motion} from 'framer-motion'
import { containerVariants, tagVaraints, titleVaraints } from '@/src/utils/animation'

const WhoWeCooperate = () => {
  return (
    <div className='wwi-wrapper'>
        <div className='container'>
            <div className='wwi-container'>
                {/* left side */}
                <div className='wwi-left'>
                    <div className='head'>
                        <motion.span variants={tagVaraints} initial='offscreen' whileInView={'onscreen'} className='tag'>Who are we cooperate?</motion.span>
                        <motion.span variants={titleVaraints} initial='offscreen' whileInView={'onscreen'} className='title'>
                            {" "}
                            Japanese A5 <br/> Wagyu
                        </motion.span>
                    </div>
                    {/* features */}
                    <div className='wwi-features'>
                        {whoWePooperate.map((feature, i) => (
                            <motion.div
                            variants={containerVariants(i*0.05+1)}
                            initial='offscreen'
                            whileInView={'onscreen'}
                            className='wwi-feature' key={i}>
                                <span className='des'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* right side */}
                <div className='wwi-right'>
                    <motion.img variants={containerVariants(0.5)} initial='offscreen'
                            whileInView={'onscreen'} src='persons.png' alt='feature' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeCooperate