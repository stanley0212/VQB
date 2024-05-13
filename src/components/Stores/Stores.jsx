import React from 'react'
import './Stores.css'
import { features, stores } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { containerVariants, desVaraints, tagVaraints, titleVaraints } from '@/src/utils/animation'

const Stores = () => {
  return (
    <div className='o-wrapper'>
        <div className='container'>
            <div className='o-container'>
                {/* head of section */}
                <div className='o-head'>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={tagVaraints} className='tag'>Our Stores Location</motion.span>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='title'>{' '} CBD | GLEN | BOX HILL | HIGHPOINT</motion.span>
                </div>
                {/* two blocks */}
                <div className='o-blocks'>
                    <div className='o-block'>
                        
                        <div className='block-features'>
                            {stores.map((feature, i) => (
                                // <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                //     {/* <Image src={feature.icon} alt='feature' width={60} height={60} /> */}
                                //     <span>{stores.address}</span>
                                // </motion.div>
                                <div key={i} className='block-feature'>
                                <span>{feature.address}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className='o-block'>
                    <motion.span initial='offscreen' whileInView={'onscreen'} variants={titleVaraints} className='sec-title'>Japanese Wagyu</motion.span>
                        <motion.span initial='offscreen' whileInView={'onscreen'} variants={desVaraints} className='text'>Wagyu test</motion.span>
                        <div className='block-features'>
                            {features.slice(3,6).map((feature, i) => (
                                <motion.div initial='offscreen' whileInView={'onscreen'} variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                    <Image src={feature.icon} alt='feature' width={60} height={60} />
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stores