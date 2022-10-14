import React from 'react'
import logoMob from '../assets/LogoMob.svg'
import linkdIn from '../assets/Icons/Linkedin.svg'
import github from '../assets/Icons/github.svg'
import twitter from '../assets/Icons/Twitter.svg'

const Footer = () => {
  return (
    <div className='lg:max-w-[1200px] m-auto mt-10 mb-10'>
      <div className='lg:hidden md:hidden space-y-9 flex flex-wrap  justify-center'>
        <img src={logoMob} alt="Logo" className='lg:min-w-[305px]' />
        <ul className='stroke flex uppercase justify-center space-x-4  flex-wrap font-bold text-sm lg:text-xl'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className='flex space-x-1.5'>
            <a href="https://www.linkedin.com/in/vladyslav-nechytailo-373b74193/" target="_blank"><img src={linkdIn} alt="" /></a>
            <a href="https://github.com/Nutopia13" target="_blank"><img src={github} alt="" /></a>
            <a href="https://twitter.com/V_Nechytailo" target="_blank"><img src={twitter} alt="" /></a>
            </div>

            <p className='uppercase text-dark_blue font-[600] text-sm '><strong>2022</strong> @ copyrights, all right reserved.</p>
      </div>



      <div className=' hidden lg:grid grid-cols-2 items-center'>
        <img src={logoMob} loading="lazy"  alt="Logo" className='lg:min-w-[305px]' />
        <div className='flex space-x-12 items-center'>
        <ul className='stroke flex uppercase justify-center space-x-4   font-bold text-sm lg:text-xl'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className='flex space-x-1.5'>
            <a href="https://www.linkedin.com/in/vladyslav-nechytailo-373b74193/" target="_blank"><img src={linkdIn} alt="" className='lg:w-[60px]' /></a>
            <a href="https://github.com/Nutopia13" target="_blank"><img src={github} alt=""  className='lg:w-[60px]'/></a>
            <a href="https://twitter.com/V_Nechytailo" target="_blank"><img src={twitter} alt="" className='lg:w-[60px]' /></a>
          </div>
         </div>
         
         <p className=' mt-24 uppercase text-dark_blue font-[600] text-sm '><strong>2022</strong> @ copyrights, all right reserved.</p>
      </div>

      <div className=' hidden lg:hidden md:grid grid-cols-3 items-center max-w-[700px] m-auto'>
        <img src={logoMob} loading="lazy"  alt="Logo" className='lg:min-w-[305px]' />
        <div className='flex space-x-12'>
        <ul className='stroke flex uppercase justify-center space-x-4 font-bold text-sm'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

         </div>
         
         <p className=' mt-24 uppercase col-span-2 text-dark_blue font-[600] text-sm '><strong>2022</strong> @ copyrights, all right reserved.</p>

         <div className='flex space-x-1.5 self-end justify-self-end'>
            <a href="https://www.linkedin.com/in/vladyslav-nechytailo-373b74193/" target="_blank"><img src={linkdIn} alt="" className='lg:w-[60px]' /></a>
            <a href="https://github.com/Nutopia13" target="_blank"><img src={github} alt=""  className='lg:w-[60px]'/></a>
            <a href="https://twitter.com/V_Nechytailo" target="_blank"><img src={twitter} alt="" className='lg:w-[60px]' /></a>
          </div>
      </div>
    </div>
  )
}

export default Footer