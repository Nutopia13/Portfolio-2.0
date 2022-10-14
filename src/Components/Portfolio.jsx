import React from 'react'
import Portfolio_Component from './Portfolio_Component'
import data from '../data'
import left from '../assets/Left Arrow.svg'
import right from '../assets/Right Arrow.svg'

const Portfolio = () => {
    const cards = data.portfolio.map(item => {
        return (
            <Portfolio_Component
            key = {item.id}
            item = {item}
             />

        ) 
    })
  return (
    <div className='bg-hero-pattern bg-center pb-8'>
      <div className='lg:pt-32 pt-16'>
        <div>
          <h2 className='m-auto md:text-left md:max-w-[436px] md:ml-12 lg:ml-32 lg:max-w-[765px] max-w-[333px] portfolio_title'>Why people love <br/>
          <span className='text-bright_yellow'>my work</span></h2>
        </div>
        <div className='port_cont--slide lg:pt-16 pt-8'>
          <Portfolio_Component />
        </div>
        <div className='justify-center pt-10 space-x-6 flex flex-row'>
            <img src={left} alt="" className='lg:hidden' />
            <img src={right} alt="" className='lg:hidden'/>
          </div> 
      </div>
    </div>
  )
}

export default Portfolio