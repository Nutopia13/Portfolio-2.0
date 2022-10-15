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

  
        whileInView={{opacity: 1, x:0}}
        transition={{type:'spring', duration: 1.5, bounce: 0.5}}
        viewport = {{ones:true}}
        src={about_pic} alt="" className='lg:w-[500px] pt-10 lg:pt-32  md:w-[300px]'/>

    
      <div className='text_cont--about lg:pt-32 pt-10'>
          
          <h3 className='about_title lg:text-[80px] font-oswald text-3xl font-bold text-white'>About Me</h3>
 
              
              <div className='my_bio relative'>
              {/* <img loading="lazy" src={lighting} className = 'max-w-[60px] justify-self-center self-center lg:min-w-[112px] lg:top-48 lg:-left-16 lg:max-h-[179px] max-h-[97px] top-36 -left-6 z-50' />  */}
               <p className='text-dark_blue top-4 mt-8 left-5 border-2 justify-self-center self-center relative z-20 border-dark_blue font-oswald text-2xl bg-bright_yellow uppercase min-h-[51px] tracking-wide flex items-center max-w-[148px] font-bold lg:text-4xl pl-4'>My Bio</p>
              </div>
            
            <div className='about_text lg:max-w-[705px]  max-w-[321px] bg-white border-dark_blue border-4'>
              <p className=' about_p  lg:text-2xl lg:max-w-[580px] max-w-[300px] text-base pt-[36px] px-[20px] lg:px-11 text-left font-oswald '>
                Hello World, my name is Vlad and I’m a Full Stack Developer from Ukraine. I work remotely, stay flexible and always try to live in the process of learning new things. </p>
              <p className=' about_p lg:text-2xl lg:max-w-[580px] max-w-[310px] text-base pb-[36px] px-[20px] pt-[25px] lg:px-11 text-left font-oswald'>I focus on frontend, backend, and architecture. Always try to build things easy, stable and scalable. I provide a broad range of services from designing your software system up to developing it with focus on stability, performance and scalability. When I'm not crunching through code, I'm out at a start-up pitch or exploring the world.</p>
            </div>
          
          <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
          <a target='_blank' href="\Nechytailo_Vladyslav_CV.pdf"><button className='lg:left-14 lg:text-[30px] text-lg font-oswald text-dark_blue font-bold btn2 py-2 px-5 relative bottom-6 left-7 lg:px-10 hover:shadow-none ease-in  duration-75 lg:py-5 uppercase bg-azra'>Resume</button></a>
          </motion.button>
      </div>
      </div>
      
        <img loading="lazy" src={lighting} className =  'left-3/4 lg:top-48 top-15 md:top-24 lg:min-w-[232px] lg:min-h-[371px] max-w-[72px] h-[116px] relative z-50 right-14' />
    
      <img loading="lazy" src={check} alt="" className=' relative w-full h-full md:top-2 lg:-top-28 bottom-12 overflow-hidden' />
    </div>
  )
}

export default About