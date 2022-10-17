import React from 'react'
import example from '../assets/pexels-markus-spiske-360591(1).jpg'
import { HtmlIcon } from './Icons/HTML'
import arrowlink from '../assets/arrowLink.svg'
import { ReactIcon } from './Icons/React_Icon'
import { TailwindIcon } from './Icons/Tailwind_Icon'

const Portfolio_Component_Mob = (props) => {
  return (
    <div className='flex flex-col flex-wrap'>
    <div className='m-auto min-w-[340px] pt-2 pb-8 flex flex-wrap flex-col'>
      <div className='img_cont w-[325px] bg-contain'>
        <img src={props.image} alt="" className='w-full' />
      </div>
      <div className='port_text--cont max-w-[340px] font-oswald pt-8 text-dark_blue text-left '>
      <div className='flex gap-4 items-center '>
        <h3 className='port_card--title lg:text-4xl underline'><a target='_blank' href={props.link}>{props.title}</a></h3>
        <a className='min-w-[8%]' target="_blank" href={props.link}><img src={arrowlink} alt="" /></a>
      </div>
        <p className='pt-3  text-base  opacity-70'>{props.description}</p>
        <div className='flex  space-x-3 pt-5 items-center'>
        <p className=' font-bold text-lg items-center'>Tech Stack:</p>
        <div className='flex space-x-1'>
          <HtmlIcon />
          <ReactIcon /> 
          <TailwindIcon />
        </div>
        </div>
      </div>
      
    </div>

    </div>
  )
}

export default Portfolio_Component_Mob