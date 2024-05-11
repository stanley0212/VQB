'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { containerVariants, desVaraints, tagVaraints, titleVaraints } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className='container'>
            <div className='wwd-container'>
                {/* head of section */}
                <div className='wwd-head'>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={tagVaraints} className='tag'>What we do</motion.span>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='title'>{' '} test</motion.span>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={desVaraints} className='des'>Here is we products</motion.span>
                </div>
                {/* two blocks */}
                <div className='wwd-blocks'>
                    <div className='wwd-block'>
                        <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='sec-title'>Wagyu</motion.span>
                        <motion.span initial='offscreen' whileInView={'onscreen'} variants={desVaraints} className='text'>Wagyu test</motion.span>
                        <div className='block-features'>
                            {features.slice(0,3).map((feature, i) => (
                                <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                    <Image src={feature.icon} alt='feature' width={60} height={60} />
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className='wwd-block'>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='sec-title'>Wagyu</motion.span>
                        <motion.span initial='offscreen' whileInView={'onscreen'} variants={desVaraints} className='text'>Wagyu test</motion.span>
                        <div className='block-features'>
                            {features.slice(3,6).map((feature, i) => (
                                <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                    <Image src={feature.icon} alt='feature' width={60} height={60} />
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* support block */}
            <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants(0.3)} className='wwd-support'>
                    {/* left side */}
                    <div>
                        <span className='sec-title'>Blue Growth Support</span>
                        <span className='des'>
                            Test 123
                        </span>
                    </div>
                    {/* right side */}
                    <div>
                        <span className='text'>test1231</span>
                        <span className='text'>test456789</span>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default WhatWeDo