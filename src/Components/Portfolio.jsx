import React from 'react'
import Portfolio_Component from './Portfolio_Component_Mob'
import data from '../data'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Portfolio_Components from './Portfolio_Compononets'

  

const Portfolio = () => {



    const cards = data.portfolio.map(item => {
        return (
            <Portfolio_Components
            key = {item.id}
            item = {item}
             />

        ) 
    })
  return (
    <div className='bg-center md:pb-32 pb-8'>
      <div className='lg:pt-32 pt-16'>
        <div>
          <h2 className='m-auto md:text-left md:max-w-[436px] md:ml-12 lg:ml-32 lg:max-w-[765px] max-w-[333px] portfolio_title'>Why people love <br/>
          <span className='text-bright_yellow'>my work</span></h2>
        </div>
        <div className='hidden overflow-x-scroll md:flex m-auto port_cont--slide  max-w-[350px] md:max-w-[750px] lg:max-w-full flex-row  lg:pt-16 pt-16'>
        {cards}
        </div>
        <Swiper
        className='mySwiper m-auto min-h-[550px] md:hidden lg:hidden port_cont--slide flex max-w-[350px] md:max-w-[750px] lg:max-w-full flex-row  lg:pt-16 mt-16'
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Portfolio_Component
        title = 'Ugi Stelmokaitis'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component
        title = 'Ugi Stelmokaitis'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component
        title = 'Ugi Stelmokaitis'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Portfolio_Component
        title = 'Ugi Stelmokaitis'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        </SwiperSlide>

      </Swiper>

      </div>
    </div>
  )
}

export default Portfolio