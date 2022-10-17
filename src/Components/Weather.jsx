import React from 'react'
import CurrentWeather from './CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from "../API";
import Search from './Search'
import { useState } from "react";
import umbrella from '../assets/umbrella.svg'
import read from '../assets/read.svg'
import close from '../assets/close.svg'
import { motion } from "framer-motion"

const Weather = (props) => {

   const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
  
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  const weatherVariants = {
    offscreen: {
      y: -200,
      opacity: 0
      
    
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 3
      }
    },
    offscreen_bg:{
      opacity: 0

    },

    onscreen_bg:{
      opacity: 1
    }
  };

    
  return (props.trigger) ? (
    <motion.div 
    variants={weatherVariants}
    initial="offscreen_bg"
    whileInView="onscreen_bg"
    viewport={{ once: true }} 

    className='absolute weather z-50  hidden md:block'>
        <motion.div
        variants={weatherVariants}

        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }} 
        className='mx-auto mt-7 relative rounded-2xl weather_container max-w-[1000px] h-2/3 bg-white'>
          <div className='flex justify-between'>
            <Search onSearchChange={handleOnSearchChange} />
             <img src={close} className='max-w-[10%] mr-12' alt="" onClick = {() => props.setTrigger(false)} />
          </div>
            

            <div className='flex absolute top-72 max-w-[980px] mx-auto justify-between items-center'>
              <img src={umbrella} alt="" className='w-[20%]' />
              <img src={read} alt="" className='w-[20%]' />
            </div>
            {currentWeather && <CurrentWeather data={currentWeather} />}
        </motion.div>
        {props.children}
    </motion.div>
    
  ) : '';
}

export default Weather