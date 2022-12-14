import React from "react";
import MyResume from "../Components/MyResume";
import TextScroller from "./RunningText";
import spiral from "../assets/Spiral.svg";
import RunningText_Desk from "./RunningText_Desk";
import Running_Text_Tab from "./Running_Text_Tab";
import { motion } from "framer-motion";

const Hero = () => {
  const heroTextVariants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen_hello: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },

    onscreen_name: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },
    onscreen_position: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },
    onscreen_resume: {
      x: 0,
      opacity: 1,
      transition: {
        delay: "2",
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },
  };

  return (
    <div>
      <div className="w-full max-h-[628px] md:max-h-full pt-16 md:bg-contain bg-center">
        <div>
          {/* Hello_Text */}
          <div className="ml-4 md:ml-[60px] lg:ml-[164px] md:max-w-[473px] lg:max-w-[746px] max-w-[347px] text_cont--hero">
            <motion.div
              variants={heroTextVariants}
              initial="offscreen"
              whileInView="onscreen_hello"
              viewport={{ once: true }}
            >
              <div className="hello_cont md:h-[72px] h-[60px] lg:h-[112px] w-[149px] md:w-[179px] lg:min-w-[273px] lg:text-[64px] md:text-4xl text-2xl">
                <h2 className="hello_text">Hello</h2>
              </div>
            </motion.div>

            {/* Name Text */}
            <motion.div
              variants={heroTextVariants}
              initial="offscreen"
              whileInView="onscreen_name"
              viewport={{ once: true }}
              className="name_cont md:mt-[12px] lg:mt-[22px] py-[18px] px-[36px] max-w-[269px] max-h-[60px] md:min-h-[72px] lg:min-h-[112px] md:min-w-[343px] lg:max-w-[537px] "
            >
              <h2 className="text-2xl  lg:mt-5 lg:h-[64px] leading-6 lg:leading-9 md:min-w-[441px] md:text-4xl lg:text-[64px] name_text">
                I'm Vladyslav
              </h2>
            </motion.div>

            {/* Position Text */}
            <motion.div
              variants={heroTextVariants}
              initial="offscreen"
              whileInView="onscreen_position"
              viewport={{ once: true }}
              className=" relative z-0 duration-75 lg:px-[49px] md:mt-[11px] lg:py-[26px] md:max-w-[469px] md:min-h-[66px] lg:max-w-[745px] lg:max-h-[120px] position_cont mt-[6px] lg:mt-[24px]"
            >
              <h1 className="text-lg  group-hover:translate-x-0 group-hover:translate-y-0 md:text-3xl lg:text-[54px] position_text">
                Full Stack Developer
              </h1>
            </motion.div>

            <motion.div
              variants={heroTextVariants}
              initial="offscreen"
              whileInView="onscreen_resume"
              viewport={{ once: true }}
            >
              <MyResume />
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={spiral}
          alt=""
          className="spiral lg:hidden md:hidden min-w-[594px] relative bottom-20 right-[14%] z-20"
        />

        <TextScroller />
      </div>

      <RunningText_Desk />
      <Running_Text_Tab />
    </div>
  );
};

export default Hero;
