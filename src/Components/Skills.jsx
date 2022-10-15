import React from 'react'
import data from '../data'
import Skills_Component from './Skills_Component'
import check from '../assets/Checkbox_Mob.svg'
import { motion } from "framer-motion"


const Skills = () => {

  const skill_card = data.skills.map(item => {
    return (
        <Skills_Component
        key = {item.id}
        item = {item}
         />


    ) 
})
  return (
    <div className='bg-blue1 skills  lg:pt-72 pt-16 lg:pb-36 pb-14'>
      <div className='text-white text-center lg:text-left mt-10'>
        <h2 className='lg:ml-32 skills_title font-bold font-oswald md:text-6xl lg:text-[90px] text-4xl'>My <span className='text-bright_yellow'>Skills</span></h2>
      </div>
      <motion.div 
      initial={{
        x: -200,
        opacity: 0,

      }}

      whileInView={{opacity: 1, x:0}}
      transition={{type:'spring', duration: 2, bounce: 0.7}}
      viewport = {{ones:true}}


      className='flex justify-center flex-wrap items-center lg:space-x-12 md:space-x-7 space-x-3'>

        {skill_card}
      </motion.div>
      <img src={check} alt="" className=' relative w-full h-full top-20 overflow-hidden lg:top-40' />
    </div>
  )
}

export default Skills

