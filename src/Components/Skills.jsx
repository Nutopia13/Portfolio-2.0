import React from 'react'
import data from '../data'
import Skills_Component from './Skills_Component'
import left from '../assets/Left Arrow.svg'
import right from '../assets/Right Arrow.svg'


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
    <div className='bg-[#E4EDF3] lg:pt-72 pt-16 lg:pb-36 pb-14'>
      <div className='text-white text-center lg:text-left mt-10'>
        <h2 className='lg:ml-32 skills_title font-bold font-oswald lg:text-[90px] text-4xl'>My <span className='text-bright_yellow'>Skill</span></h2>
      </div>
      <div className='flex justify-center items-center lg:space-x-12  space-x-3'>
        <img src={left} alt="" className='lg:w-[108px] lg:pt-[8%] lg:pl-6 pt-[30%]'/>
        {skill_card}
        <img src={right} alt="" className='lg:w-[108px] lg:pt-[8%] lg:pr-6 pt-[30%]'/>
      </div>
    </div>
  )
}

export default Skills

