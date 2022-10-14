import React from 'react'
import { motion } from "framer-motion"

const Running_Text_Tab = () => {
  return (
    <div className='flex justify-center'>
        <div className='absolute lg:hidden top-[90%] right-[0.08%] z-20 w-full h-[52px] hidden justify-center items-center md:flex uppercase font-oswald bg-azra text-white running_text font-bold text-2xl'>
        
  <motion.h3 initial={{
            x: -500,
            opacity: 0,

          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          whileInView={{opacity: 1}}
          transition={{duration:1.2}}
          viewport = {{ones:true}}
          >UI effects   -   animations   -   Full Stack Developer</motion.h3>
        </div>
    </div>
  )
}

export default Running_Text_Tab