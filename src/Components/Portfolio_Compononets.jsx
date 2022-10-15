import React from 'react'
import example from '../assets/pexels-markus-spiske-360591(1).jpg'
import { HtmlIcon } from './Icons/HTML'
import { ReactIcon } from './Icons/React_Icon'
import { TailwindIcon } from './Icons/Tailwind_Icon'
import {motion} from 'framer-motion'

const Portfolio_Components = (props) => {
  return (

    <div className='flex flex-col flex-wrap'>
    <div className='lg:ml-28 md:ml-6 lg:min-w-[478px] min-w-[338px] pb-8 pl-5 flex flex-wrap flex-col'>
      <div className='img_cont max-w-[325px] max-h-[290px] lg:max-w-[460px] lg:max-h-[460px]'>
        <img src={example} alt="" className='w-full' />
      </div>
      <div  className='port_text--cont md:max-w-[300px] lg:max-w-[400px] max-w-[340px] font-oswald lg:pt-10 pt-6 text-dark_blue text-left '>
        <h3 className='port_card--title lg:text-4xl underline'><a href="">{props.item.title}</a></h3>
        <p className='pt-3 lg:5 text-base lg:text-2xl opacity-70'>{props.item.description}</p>
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

export default Portfolio_Components