import React from 'react'
import MyResume from '../Components/MyResume'
import TextScroller from './RunningText'
import spiral from '../assets/Spiral.svg'
import RunningText_Desk from './RunningText_Desk'


const Hero = () => {

  return (
    <div className='w-full md:max-h-[560px] lg:min-h-[900px] pt-16 md:bg-contain md:min-w-[768px] lg:bg-contain max-h-[700px] bg-center'>
      <img src={spiral} alt="Hero Img" className='lg:relative hidden max-w-[70%] lg:z-50 lg:block top-[15%] bottom-20 left-[50%]' />
      <div className='w-[768px] h-[550px] hidden lg:hidden md:block overflow-hidden bottom-16 left-[40%] relative'>
        <img src={spiral} alt="Hero Img" className=' md:max-w-[800px] relative z-20 hidden  md:block lg:hidden ' />
      </div>
      <div>
        {/* Hello_Text */}
        <div className='lg:absolute lg:top-40 md:absolute md:bottom-[45%] ml-4 md:ml-[60px] lg:ml-[164px] bottom-48 md:max-w-[473px] lg:max-w-[746px] max-w-[347px] text_cont--hero'>
          <div className='hello_cont md:h-[72px] h-[60px] lg:h-[112px] w-[149px] md:w-[179px] lg:min-w-[273px] lg:text-[64px] md:text-4xl text-2xl'>
           <h1 className='hello_text'>Hello</h1>
          </div>

          {/* Name Text */}
          <div className='name_cont md:mt-[12px] lg:mt-[22px] py-[18px] px-[36px] max-w-[269px] max-h-[60px] md:min-h-[72px] lg:min-h-[112px] md:min-w-[343px] lg:max-w-[537px] '>
            <h2 className='text-2xl  lg:mt-5 lg:h-[64px] leading-6 lg:leading-9 md:min-w-[441px] md:text-4xl lg:text-[64px] name_text'>I'm Vladyslav</h2>
          </div>

          {/* Position Text */}
          <div className=' hover:shadow-none group hover:translate-x-px ease-in relative z-0 duration-75 hover:translate-y-px lg:px-[49px] md:mt-[11px] lg:py-[26px] md:max-w-[469px] md:min-h-[66px] lg:max-w-[745px] lg:max-h-[120px] position_cont mt-[6px] lg:mt-[24px]'>
            <h2 className='text-lg  group-hover:translate-x-0 group-hover:translate-y-0 md:text-3xl lg:text-[54px] position_text'>A Full Stack Developer</h2>
          </div>
        </div>
        
        <MyResume />
  
        <div className='clip_desk hidden lg:block'>  
        </div>
        <div className='clip_tab hidden lg:hidden md:block'>
        </div>
        <RunningText_Desk />
        <TextScroller />

      </div>
    </div>
  )
}

export default Hero