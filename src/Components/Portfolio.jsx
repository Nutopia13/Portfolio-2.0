import React from 'react'
import Portfolio_Component_Mob from './Portfolio_Component_Mob'
import data from '../data'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import '../index.css'
import { Navigation } from "swiper";
import Portfolio_Components from './Portfolio_Compononets'
import Weather from './Weather/Weather';
import {useState} from 'react'
import sun from '../assets/sun.svg'
import tic from '../assets/Icons/noughts-and-crosses.svg'
import TicTacToe from './Tic -Tac-Toe/TicTacToe';
import { ReactIcon } from './Icons/React_Icon'
import { TailwindIcon } from './Icons/Tailwind_Icon'
import { HtmlIcon } from './Icons/HTML'
import { Javascript } from './Icons/JavaScript';
  

const Portfolio = () => {

  const portTextVariants = {
    offscreen: {
      x: -200,
      opacity: 0
      
    
    },
    onscreen_hello: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 3
      }
    }
  }
  

  const [weatherButtonPop, setWeatherbuttonPop] = useState(false)
  const [ticButtonPop, setTicButtonPop] = useState(false)

    const cards = data.portfolio.map(item => {
        return (
            <Portfolio_Components
            key = {item.id}
            item = {item}
             />

        ) 
    })

  

  return (
  
    
    <div className='bg-center  md:pb-32 pb-8'>
      <Weather trigger={weatherButtonPop} setTrigger = {setWeatherbuttonPop} />
      <TicTacToe trigger={ticButtonPop} setTrigger = {setTicButtonPop}/>
      <div className='lg:pt-32 pt-16'>
        <motion.div
        variants={portTextVariants}
        initial="offscreen"
        whileInView="onscreen_hello"
        viewport={{ once: true }}
         className='flex items-center'>
          <h2 className='m-auto md:text-left md:max-w-[436px] md:ml-12 lg:ml-32 lg:max-w-[765px] max-w-[333px] portfolio_title'>Why people love <br/>
          <span className='text-bright_yellow'>my work </span></h2>
          <div className='flex relative md:right-28 md:space-x-5 lg:space-x-10 lg:right-24'>
          <motion.img 
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          src={sun} onClick ={() => setWeatherbuttonPop(true)} alt=""  className='cursor-pointer hidden md:block md:max-w-[50px] lg:max-w-[80px]'/>
          <motion.img 
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          src={tic} onClick ={() => setTicButtonPop(true)} alt="" className='cursor-pointer hidden md:block md:max-w-[50px] lg:max-w-[80px]' />
          </div>
        </motion.div>
        
    
        <div className='hidden progress-bar overflow-x-scroll md:flex m-auto port_cont--slide  max-w-[350px] md:max-w-[750px] lg:max-w-full flex-row  lg:pt-16 pt-16'>
        {cards}
        </div>
        <Swiper
        className='mySwiper justify-center m-auto min-h-[500px] md:hidden lg:hidden port_cont--slide flex max-w-full  flex-row  lg:pt-16 mt-16'
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Portfolio_Component_Mob
        image = '/Earth_2.0.avif'
        link = 'https://nutopia13.github.io/Earth-2.0/'
        title = 'Earth 2.0'
        description = 'This is a random generator project which is themed around a possible habitat planets. Click and Explore. We might need it sooner than you think...'
        stack1 = {<HtmlIcon />} 
        stack2 = {<Javascript />}
        stack3 = {<TailwindIcon />}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component_Mob
        image = '\Design_Agency.png'
        link = 'https://inspiring-eclair-76217d.netlify.app/'
        title = 'Design Agency'
        description = 'Design solutions made easy. Design Agency is a digital design-led agency mainly focused on Product Development.'
        stack1 = {<HtmlIcon />} 
        stack2 = {<ReactIcon />}
        stack3 = {<TailwindIcon />}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component_Mob
        image = '/MakerPreLaunch.png'
        link = 'https://golden-meerkat-82b114.netlify.app/'
        title = 'Maker Pre-launch'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        stack1 = {<HtmlIcon />} 
        stack2 = {<ReactIcon />}
        stack3 = {<TailwindIcon />}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component_Mob
        image = ''
        link = ''
        title = 'Ugi Stelmokaitis'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        stack1 = {<HtmlIcon />} 
        stack2 = {<ReactIcon />}
        stack3 = {<TailwindIcon />}
        />
        </SwiperSlide>

      </Swiper>

      </div>
    </div>
  )
}

export default Portfolio