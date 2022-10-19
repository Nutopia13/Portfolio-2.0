import React from 'react'

const Skills_Mob = (props) => {
  return (
    <div>
      <div className='skills_cont mx-auto max-w-[285px]'>
        <img src={props.icon} alt="" className='w-[90px] relative z-20 top-14'/>
        <div className='skills_text max-h-[312px] px-[28px] lg:pt-[90px] pt-[70px] bg-white border-2 border-[#06283D] font-oswald text-dark_blue'>
          <h3 className='font-bold text-3xl'>{props.title}</h3>
          <p className='font-extralight opacity-70 max-w-[212px] lg:max-w-[374px] pb-[32px] pt-3 lg:pt-6'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills_Mob