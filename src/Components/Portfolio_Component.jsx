import React from 'react'
import example from '../assets/pexels-markus-spiske-360591(1).jpg'

const Portfolio_Component = (props) => {
  return (
    <div className='lg:ml-28 max-w-[475px] pl-5 flex flex-wrap flex-col'>
      <div className='img_cont max-w-[325px] max-h-[290px] lg:max-w-[460px] lg:max-h-[460px]'>
        <img src={example} alt="" className='w-full' />
      </div>
      <div className='port_text--cont lg:pt-10 pt-6 text-dark_blue text-left '>
        <h3 className='port_card--title lg:text-4xl'>Ugi Stelmokaitis</h3>
        <p className='pt-3 lg:5 text-base lg:text-2xl opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Portfolio_Component