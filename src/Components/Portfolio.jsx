import React from "react";
import Portfolio_Component_Mob from "./Portfolio_Component_Mob";
import data from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation } from "swiper";
import Portfolio_Components from "./Portfolio_Compononets";
import Weather from "./Weather/Weather";
import { useState } from "react";
import sun from "../assets/sun.svg";
import tic from "../assets/Icons/noughts-and-crosses.svg";
import TicTacToe from "./Tic -Tac-Toe/TicTacToe";
import { ReactIcon } from "./Icons/React_Icon";
import { TailwindIcon } from "./Icons/Tailwind_Icon";
import { HtmlIcon } from "./Icons/HTML";
import { Javascript } from "./Icons/JavaScript";
import { ReactRouter } from "./Icons/ReactDom";

const Portfolio = () => {
  const [isOpenWeather, setIsOpenWeather] = useState(true);
  const [isOpenTicTacToe, setIsOpenTicTacToe] = useState(true);

  const portTextVariants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen_hello: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },
  };

  const cards = data.portfolio.map((item) => {
    return <Portfolio_Components key={item.id} item={item} />;
  });

  return (
    <div className="bg-center  md:pb-32 pb-8">
      {!isOpenWeather && <Weather />}
      {!isOpenTicTacToe && <TicTacToe />}

      <div className="lg:pt-32 pt-16">
        <motion.div
          variants={portTextVariants}
          initial="offscreen"
          whileInView="onscreen_hello"
          viewport={{ once: true }}
          className="flex items-center"
        >
          <h2 className="m-auto md:text-left md:max-w-[436px] md:ml-12 lg:ml-32 lg:max-w-[765px] max-w-[333px] portfolio_title">
            Why people love <br />
            <span className="text-bright_yellow">my work </span>
          </h2>
          <div className="flex relative md:right-28 md:space-x-5 lg:space-x-10 lg:right-24">
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={sun}
              onClick={() => setIsOpenWeather(!isOpenWeather)}
              alt=""
              className="cursor-pointer hidden md:block md:max-w-[50px] lg:max-w-[80px]"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={tic}
              onClick={() => setIsOpenTicTacToe(!isOpenTicTacToe)}
              alt=""
              className="cursor-pointer hidden md:block md:max-w-[50px] lg:max-w-[80px]"
            />
          </div>
        </motion.div>

        <div className="hidden progress-bar overflow-x-scroll md:flex m-auto port_cont--slide max-w-full flex-row  pt-16">
          {cards}
        </div>
        <Swiper
          className="mySwiper justify-center m-auto min-h-[500px] md:hidden lg:hidden port_cont--slide flex max-w-full  flex-row  lg:pt-16 mt-16"
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
              image = '/PlanetsScreen.png'
              imageAvif="/PlanetsScreen.png"
              link="https://quiet-crepe-0ed89d.netlify.app/"
              title="The Planets"
              description="Discover the universe with planet fact sites. Inspired by NASA's work, this project uses React and Routers to display information on all planets in our solar system."
              stack1={<ReactRouter />}
              stack2={<ReactIcon />}
              stack3={<TailwindIcon />}
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Portfolio_Component_Mob
              image = '/DevJobs2.png'
              imageAvif="Earth_2.0.avif"
              link="https://unique-starlight-fcac6b.netlify.app/"
              title="Open Jobs"
              description="We're a platform for developers to create vacation experiences that are open to the public. The platform is designed to be used by anyone, regardless of programming experience or technical skills."
              stack1={<ReactRouter />}
              stack2={<ReactIcon />}
              stack3={<TailwindIcon />}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Portfolio_Component_Mob
              image = '/Design_Agency.png'
              imageAvif="Design_Agency.avif"
              link="https://inspiring-eclair-76217d.netlify.app/"
              title="Design Agency"
              description="From brand identity to web design, we create solutions that are simple, beautiful and function."
              stack1={<HtmlIcon />}
              stack2={<ReactIcon />}
              stack3={<TailwindIcon />}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Portfolio_Component_Mob
              image = '/MyTeam.png'
              imageAvif="/MyTeam.png"
              link="https://quiet-gumdrop-bd2ac4.netlify.app/"
              title='My Team'
              description="Yep, finding the right people and building high performing teams can be hard. But you don’t have to do it alone, and we’re here to change that."
              stack1={<HtmlIcon />}
              stack2={<ReactIcon />}
              stack3={<TailwindIcon />}
            />
          </SwiperSlide>

    
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
