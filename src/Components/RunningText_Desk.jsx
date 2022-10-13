import React from 'react'
import { motion } from "framer-motion"

const RunningText_Desk = () => {
  return (
    <div className='flex justify-center'>
        <div className='absolute top-[125%] w-full z-50 lg:flex h-[94px] hidden justify-center items-center md:hidden uppercase font-oswald bg-azra text-white running_text font-bold text-4xl'>
    
          <motion.h3 
          initial={{
            x: -500,
            opacity: 0,

          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          whileInView={{opacity: 1}}
          transition={{duration:1.2}}
          viewport = {{ones:true}}>
            UI effects   -   animations   -   dynamic user experiences   -  Full Stack Developer</motion.h3>
        </div>
    </div>
  )
}

export default RunningText_Desk