import React from 'react'
import './OurDiff.css'
import { ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { containerVariants, desVaraints, tagVaraints, titleVaraints } from '@/src/utils/animation'

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
      <div className='container'>
        <div className='od-container'>
          {/* head */}
          <motion.div className='od-head'>
            <motion.span initial='offscreen' whileInView={'onscreen'} variants={tagVaraints}  className='tag'>111111121111111</motion.span>
            <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints}  className='title'>222222222222</motion.span>
            <motion.span initial='offscreen' whileInView={'onscreen'} variants={desVaraints} className='text'>333333333333</motion.span>
          </motion.div>
          {/* feature */}
          <div className='od-features'>
            { ourDiffFeatures.map((feature, i) => (
              <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants((i+1)*0.1)} key={i} className='od-feature'>
                <Image src={feature.icon} alt='feature' width={128} height={128} />
                <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='title'>{feature.title}</motion.span>
                <motion.span className='text'>{feature.des}</motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDiff