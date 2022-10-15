import React from 'react'
import example from '../assets/pexels-markus-spiske-360591(1).jpg'
import { HtmlIcon } from './Icons/HTML'
import { ReactIcon } from './Icons/React_Icon'
import { TailwindIcon } from './Icons/Tailwind_Icon'

const Portfolio_Component = (props) => {
  return (
    <div className='flex flex-col flex-wrap'>
    <div className='m-auto min-w-[340px] pb-8 flex flex-wrap flex-col'>
      <div className='img_cont max-w-[325px] max-h-[290px]'>
        <img src={example} alt="" className='w-full' />
      </div>
      <div className='port_text--cont max-w-[340px] font-oswald pt-6 text-dark_blue text-left '>
        <h3 className='port_card--title underline'><a href="">{props.title}</a></h3>
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

export default Portfolio_Component