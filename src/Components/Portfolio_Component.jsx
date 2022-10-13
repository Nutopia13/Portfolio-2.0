import React from 'react'
import example from '../assets/pexels-markus-spiske-360591(1).jpg'
import { HtmlIcon } from './Icons/HTML'
import { ReactIcon } from './Icons/React_Icon'
import { TailwindIcon } from './Icons/Tailwind_Icon'

const Portfolio_Component = (props) => {
  return (
    <div className='flex flex-col flex-wrap'>
    <div className='lg:ml-28  max-w-[475px] pl-5 flex flex-wrap flex-col'>
      <div className='img_cont max-w-[325px] max-h-[290px] lg:max-w-[460px] lg:max-h-[460px]'>
        <img src={example} alt="" className='w-full' />
      </div>
      <div className='port_text--cont font-oswald lg:pt-10 pt-6 text-dark_blue text-left '>
        <h3 className='port_card--title lg:text-4xl underline'><a href="">Ugi Stelmokaitis</a></h3>
        <p className='pt-3 lg:5 text-base lg:text-2xl opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex  space-x-3 pt-5 items-center'>
        <p className=' font-bold text-lg lg:text-2xl items-center'>Tech Stack:</p>
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