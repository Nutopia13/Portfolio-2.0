import React from 'react'
import spiral from '../assets/Spiral.svg'
import arrow from '../assets/Checkout.svg'
import Running_Text_Tab from './Running_Text_Tab'



const MyResume = () => {
  return (
    <div>
    <div className='lg:max-w-[1220px] '>
      <div className=' lg:ml-[100px] pl-[15px] mt-[30px] lg:mt-[73px] max-w-full  z-10 lg:max-w-[1200px]'>
        <img src={arrow} alt="" className='z-30 relative  md:left-16 md:absolute md:top-full lg:absolute checkout lg:top-3/4 lg:mt-6 lg:left-32 max-w-[104px] lg:max-w-[200px] md:max-w-[91px]'/>
        <img src={spiral} alt="" className='spiral lg:hidden md:hidden max-w-[594px] relative bottom-20 right-[14%] z-20'/>
      </div>
     

      </div>
      <Running_Text_Tab />
      </div>
      
      
  )
}

export default MyResume