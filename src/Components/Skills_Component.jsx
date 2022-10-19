import React from 'react'



const Skills_Component = (props) => {
  return (
    <div>
      <div className='skills_cont'>
        <img src={props.item.icon} alt="" className='w-[154px]  relative z-20 top-14 lg:top-20'/>
        <div className='skills_text max-h-[312px] lg:max-h-[493px] px-[28px] lg:pt-[90px] pt-[70px] bg-white border-2 border-[#06283D] font-oswald text-dark_blue'>
          <h3 className='font-bold lg:text-5xl text-3xl'>{props.item.title}</h3>
          <p className='font-extralight lg:text-2xl opacity-70 max-w-[212px] lg:max-w-[374px] pb-[32px] pt-3 lg:pt-6'>{props.item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills_Component