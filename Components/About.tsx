import React from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from './export'

const About = () => {
  return (
    <div className='mt-20' id='about'> 
      <div className=" text-light_green mx-auto w-fit mb-5 text-xs md:text-sm uppercase tracking-wide">
        ✦ Explore WebCodge ✦
      </div>
      <div className="text-[#a2a1a1c2] text-2xl md:text-5xl max-w-[25ch]   md:max-w-[30ch]   mx-auto text-center px-2">
        <ScrollAnimation >
          <span className="text-white font-normal">We know the challenges.</span> AI-based web creators may seem appealing, but they often lack performance and flexibility. You need standout design, but hiring in-house can be costly. <br /> 
          <span className="text-white font-normal drop-shadow-2xl ">That’s where WebCodge comes in.</span>
        </ScrollAnimation>
        
      </div>
    </div>
  )
}

export default About
