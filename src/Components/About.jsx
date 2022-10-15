import React from 'react'
import about_pic from '../assets/About_Me.svg'
import { motion } from "framer-motion"
import check from '../assets/Checkbox_Mob.svg'
import lighting from '../assets/Full_Lighting.svg'


const About = () => {
  
  return (
    <div className='mx-auto max-h-[1150px] about_inner bg-[120%] bg-center bg-pink'>
      <div className=' flex mx-auto flex-wrap md:ml-10 md:space-x-10 md:justify-around lg:max-w-[1500px] md:max-w-[700px] items-center max-w-[370px] justify-center'>
        <motion.img 
        initial={{
          x: -200,
          opacity: 0,
  
         }}
  
        whileInView={{opacity: 1, x: 0}}
        transition={{type:'spring', duration: 0.7, bounce: 0.5}}
        viewport = {{ones:true}}
        src={about_pic} alt="" className='lg:w-[500px] pt-10 lg:pt-32  md:w-[300px]'/>

    
      <div className='text_cont--about lg:pt-32 pt-10'>
          
          <h3 className='about_title lg:text-[80px] font-oswald text-3xl font-bold text-white'>About Me</h3>
          <div className='lg:pt-8 pb-8'>
        <img loading="lazy" src={lighting} className = 'lg:left-[52%] lg:top-[162%] md:left-[50%]  lg:min-w-[112px] lg:min-h-[179px] max-w-[60px] h-[97px] absolute z-50 left-4' />
            <p className='text-dark_blue mt-[40px] top-4 left-5 border-2 relative z-20 border-dark_blue font-oswald text-2xl bg-bright_yellow uppercase min-h-[51px] tracking-wide flex items-center w-[148px] font-bold lg:text-4xl pl-4'>My Bio</p>
            <div className='about_text lg:max-w-[705px]  max-w-[321px] bg-white border-dark_blue border-4'>
              <p className=' about_p  lg:text-2xl lg:max-w-[580px] max-w-[300px] text-base pt-[36px] px-[20px] lg:px-11 text-left font-oswald '>
                Hello World, my name is Vlad and I’m a Full Stack Developer from Ukraine. I work remotely, stay flexible and always try to live in the process of learning new things. </p>
              <p className=' about_p lg:text-2xl lg:max-w-[580px] max-w-[310px] text-base pb-[36px] px-[20px] pt-[25px] lg:px-11 text-left font-oswald'>I focus on frontend, backend, and architecture. Always try to build things easy, stable and scalable. I provide a broad range of services from designing your software system up to developing it with focus on stability, performance and scalability. When I'm not crunching through code, I'm out at a start-up pitch or exploring the world.</p>
            </div>
          </div>
          <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
          <button className='lg:left-14 lg:bottom-14 lg:text-[30px] text-lg font-oswald text-dark_blue font-bold btn2 py-2 px-5 relative bottom-14 left-7 lg:px-10 hover:shadow-none ease-in  duration-75 lg:py-5 uppercase bg-azra'>Resume</button>
          </motion.button>
      </div>
      </div>
      
        <img loading="lazy" src={lighting} className =  'left-3/4 lg:top-48 top-15 md:top-24 lg:min-w-[232px] lg:min-h-[371px] max-w-[72px] h-[116px] relative z-50 right-14' />
    
      <img loading="lazy" src={check} alt="" className=' relative w-full h-full md:top-2 lg:-top-28 bottom-24 overflow-hidden' />
    </div>
  )
}

export default About