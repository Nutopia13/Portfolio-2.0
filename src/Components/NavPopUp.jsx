import React from 'react'
import { CircleClose } from './Icons/Close';
import { motion } from "framer-motion"



const NavPopUp = (props) => {
  return (props.trigger) ? (
    <div className='lg:hidden md:hidden popup fixed z-50 top-2'>
      <motion.div

       initial={{
        x: 200,
        opacity: 0,

      }}
      animate={{
        x: 0,
        opacity: 1,
      }}


      whileInView={{opacity: 1}}
      transition={{duration: 0.3}}
      viewport = {{ones:true}}
      
      className='popup-inner'>
      <ul className=' pb-[42px] stroke pop-list bg-white text-center px-[158px] font-bold text-2xl font-oswald  '>
      <CircleClose onClick = {() => props.setTrigger(false)} className='close_popUp relative top-4 left-40'/>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skill</a></li>
            <li><a href="#">Project</a></li>
            <li className='pb-[42px]'><a href="#">Contact</a></li>
            <button className='btn1 hover:shadow-none ease-in  duration-75  md:block lg:block font-bold text-sm lg:text-lg bg-bright_yellow py-2.5 px-6 lg:py-4 lg:px-9'>Resume</button>
            
        </ul>
        
        {props.children}
      </motion.div>
    </div>
  ) : '';
}

export default NavPopUp