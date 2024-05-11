import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { tagVaraints, titleVaraints } from '@/src/utils/animation'

const HowItWorks = () => {
    const featureVariant = {
        offscreen : {
            scale: 0.5
        },
        onscreen: {
            scale:1,
            transition: {
                type: 'spring',
                duration: 1.5
            }
        }
    }
  return (
    <div className='hiw-wrapper'>
        <div className='container'>
            <div className='hiw-container'>
                {/* head */}
                <motion.div className='hiw-head'>
                    <motion.span variants={tagVaraints} initial='offscreen' whileInView={'onscreen'} className='tag'>How it works</motion.span>
                    <motion.span variants={titleVaraints} initial='offscreen' whileInView={'onscreen'} className='title'>Unlocking...</motion.span>
                </motion.div>
                <div className='hiw-features'>
                    {hitFeatures.map((feature, i) => (
                        <motion.div variants={featureVariant} initial='offscreen' whileInView={'onscreen'} className='hiw-feature' key={i}>
                            {/* left side */}
                            <motion.div
                            initial={{opacity:0, x:-100}}
                            whileInView={{
                                opacity:1,
                                x: 0,
                                transition: {
                                    type: 'easeIn',
                                    duration: 1,
                                    delay: .7
                                }
                            }}
                            className='detail'>
                                <span className='des'>0{i+1}</span>
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                            {/* right side */}
                            <div className='icon'>
                                <Image src={feature.icon} width={128} height={128} style={{translate: "50% 0rem"}}/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks