import React from 'react'
import { motion } from "framer-motion"
import menu from '../assets/HambMenu.svg'
import logoMob from '../assets/LogoMob.svg'
import NavPopUp from './NavPopUp'
import {useState} from 'react'

const Navbar = () => {
  const [buttonPop, setbuttonPop] = useState(false)
   return (
    <div className='bg-white relative z-50 m-auto border-b-2 border-dark_blue border-solid'>
      <motion.nav 
      initial={{
        x: -100,
        opacity: 0,

      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      whileTap = {{border: 1}}
      whileInView={{opacity: 1}}
      transition={{type:'spring', duration: 0.7, bounce: 0.7}}
      viewport = {{ones:true}}

      className='md:gap-16 relative z-50 m-auto font-oswald lg:max-w-[1200px] md:max-w-[655px] max-w-[340px] min-h-[72px] justify-center lg:min-h-[112px] items-center flex lg:justify-between'>
      
        <img src={logoMob} alt="" className='lg:min-w-[305px]' />
        <div className='md:hidden lg:hidden ml-[40%]'>
          <img onClick ={() => setbuttonPop(true)} src={menu} alt="Navigation Menu" />
        </div>
        <NavPopUp trigger={buttonPop} setTrigger = {setbuttonPop} />
        <div 
        className='hidden md:block lg:block'>
          <ul className='stroke flex lg:ml-64 justify-center gap-4 lg:gap-9 font-bold text-sm lg:text-xl'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        <button className='btn1 hidden hover:shadow-none ease-in  duration-75  md:block lg:block font-bold text-sm lg:text-lg bg-bright_yellow py-2.5 px-6 lg:py-4 lg:px-9'>Resume</button>
        </motion.button>
      </motion.nav>
    </div>
  )
}


export default Navbar
