import React from 'react'
import data from '../data'
import Skills_Component from './Skills_Component'
import check from '../assets/Checkbox_Mob.svg'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Skills_Mob from './Skills_Mob'


const Skills = () => {

  const skill_card = data.skills.map(item => {
    return (
        <Skills_Component
        key = {item.id}
        item = {item}
         />


    ) 
})
  return (
    <div className='bg-blue1 skills  lg:pt-24 pt-16 lg:pb-36 pb-14'>
      <div className='text-white text-center lg:text-left mt-10'>
        <h2 className='lg:ml-32 skills_title font-bold font-oswald md:text-6xl lg:text-[90px] text-4xl'>My <span className='text-bright_yellow'>Skills</span></h2>
      </div>
      <Swiper
        className='mySwiper max-w-full min-h-[450px] flex justify-center mx-auto md:hidden skills_cont--slide'
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
          <Skills_Mob 
          title = 'HTML & CSS'
          description = 'Two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.'
          icon = '/HTMLIcon.png'/>
        </SwiperSlide>

        <SwiperSlide>
          <Skills_Mob  className = 'javascript'
         title = "Javascript"
         description = "JS is a lightweight, interpreted, object-oriented language with first-class functions. That' what makes your website attractive :)"
          icon = "/JSIcon.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Skills_Mob 
          title = "React JS"
          description ='Declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
          icon = "/ReactIcon.png" />
        </SwiperSlide>
</Swiper>
      <motion.div 
      initial={{
        x: -200,
        opacity: 0,

      }}

      whileInView={{opacity: 1, x:0}}
      transition={{type:'spring', duration: 2, bounce: 0.7}}
      viewport = {{ones:true}}


      className='hidden md:flex justify-center flex-wrap items-center lg:space-x-12 md:space-x-7 space-x-3'>

        {skill_card}
      </motion.div>
      <img src={check} alt="" className=' relative w-full h-full top-20 overflow-hidden lg:top-40' />
    </div>
  )
}

export default Skills

