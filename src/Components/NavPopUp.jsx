import React from 'react'
import { CircleClose } from './Icons/Close';
import { motion } from "framer-motion"



const NavPopUp = (props) => {
  return (props.trigger) ? (
    <div onClick = {() => props.setTrigger(false)} className='lg:hidden md:hidden popup flex justify-center fixed z-50 top-2'>
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
      
      className='popup'>
      <ul 
      className=' pb-[42px] flex justify-center flex-wrap stroke pop-list bg-white text-center px-[158px] font-bold text-2xl font-oswald  '>
      <CircleClose onClick = {() => props.setTrigger(false)} className='close_popUp relative top-4 left-40'/>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#portfolio">Project</a></li>
            <li className='pb-[42px]'><a href="#">Contact</a></li>
            <a target='_blank' href="\Nechytailo_Vladyslav_CV.pdf"><button className='btn1 hover:shadow-none ease-in  duration-75  md:block font-bold text-xl bg-bright_yellow py-3 px-8'>Resume</button></a>
            
        </ul>
        
        {props.children}
      </motion.div>
    </div>
  ) : '';
}

export default NavPopUp