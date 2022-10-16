import React from 'react'
import about_pic from '../assets/About_Pic.svg'
import { motion } from "framer-motion"
import lighting from '../assets/Full_Lighting.svg'


const About = () => {

  const imgVariants = {
    offscreen: {
      x: -200,
      opacity: 0
      
    
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 1,
        bounce: 0.7,
        duration: 3
      }
    }
  };

  const textVariants = {
    offscreen: {
      x: 200,
      opacity: 0
      
    
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 1,
        bounce: 0.7,
        duration: 3
      }
    }
  };
  
  return (
    <div className='mx-auto  lg:max-h-[120vh]  about_inner bg-[120%] bg-center bg-pink'>
      <div className=' flex m-auto overflow-x-hidden flex-wrap md:ml-10 md:space-x-10 md:justify-around lg:max-w-[1500px] md:max-w-[700px] items-center max-w-[370px] justify-center'>
        <motion.img 
        variants={imgVariants}

initial="offscreen"
whileInView="onscreen"
viewport={{ once: true }}
        
        src={about_pic} alt="" className='about_photo lg:w-[500px] pt-10 lg:pt-32  md:w-[300px]'/>

    
      <motion.div 
       variants={textVariants}

       initial="offscreen"
       whileInView="onscreen"
       viewport={{ once: true }}
      className='text_cont--about lg:pt-32 pt-10'>
          
          <h3 className='about_title lg:text-[80px] font-oswald text-3xl font-bold text-white'>About Me</h3>
 
              
              <div className='my_bio relative'>
              {/* <img loading="lazy" src={lighting} className = 'max-w-[60px] justify-self-center self-center lg:min-w-[112px] lg:top-48 lg:-left-16 lg:max-h-[179px] max-h-[97px] top-36 -left-6 z-50' />  */}
               <p className='text-dark_blue top-4 mt-8 left-5 border-2 justify-self-center self-center relative z-20 border-dark_blue font-oswald text-2xl bg-bright_yellow uppercase min-h-[51px] tracking-wide flex items-center max-w-[148px] font-bold lg:text-4xl pl-4'>My Bio</p>
              </div>
            
            <div className='about_text lg:max-w-[705px]  max-w-[321px] bg-white border-dark_blue border-4'>
              <p className=' about_p  lg:text-2xl lg:max-w-[580px] max-w-[300px] text-base pt-[36px] px-[20px] lg:px-11 text-left font-oswald '>
                Hello World, my name is Vlad and I’m a Full Stack Developer from Ukraine. I work remotely, stay flexible and always try to live in the process of learning new things. </p>
              <p className=' about_p lg:text-2xl lg:max-w-[580px] max-w-[310px] text-base pb-[36px] px-[20px] pt-[25px] lg:px-11 text-left font-oswald'>I focus on frontend, backend, and architecture. Always try to build things easy, stable and scalable. Currently, I'm looking for a great opportunity where I can use my skillset to build customer-focused products on the frontend. When I'm not crunching through code, I'm out at a start-up pitch or exploring the world.</p>
            </div>
          
          <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
          <a target='_blank' href="\Nechytailo_Vladyslav_CV.pdf"><button className='lg:left-14 lg:text-[30px] text-lg font-oswald text-dark_blue font-bold btn2 py-2 px-5 relative bottom-6 left-7 lg:px-10 hover:shadow-none ease-in  duration-75 lg:py-5 uppercase bg-azra'>Resume</button></a>
          </motion.button>
      </motion.div>
      </div>
      <div className='w-full flex relative top-20 lg:top-72 items-center justify-end'>
        <img loading="lazy" src={lighting} className =  'lg:relative bottom-24 lg:min-w-[232px] lg:min-h-[371px] max-w-[72px] mr-14 h-[116px] z-50' />
      </div>

    </div>
  )
}

export default About