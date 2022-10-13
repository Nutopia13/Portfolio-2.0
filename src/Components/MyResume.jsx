import React from 'react'
import arrow from '../assets/Checkout.svg'
import heroMob from '../assets/Spiral_Mob.svg'
import Running_Text_Tab from './Running_Text_Tab'



const MyResume = () => {
  return (
    <div className='lg:max-w-[1220px] md:ml-10 md:pt-3 '>
      <div className=' lg:ml-[100px] pl-[15px] mt-[30px] lg:mt-[73px] max-w-full overflow-hidden z-10 lg:max-w-[1200px]'>
        <img src={arrow} alt="" className='z-30 relative md:absolute md:bottom-[53%] lg:absolute checkout lg:top-[85%] max-w-[104px] lg:max-w-[200px] md:max-w-[91px]'/>
        <img src={heroMob} alt="" className='spiral lg:hidden md:hidden max-w-[594px] relative bottom-20 right-[14%] z-20'/>
      </div>
      <Running_Text_Tab />

      </div>
      
      
  )
}

export default MyResume