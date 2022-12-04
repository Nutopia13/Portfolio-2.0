import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../assets/HambMenu.svg";
import logoMob from "../assets/LogoMob.svg";
import { useState } from "react";
import { CircleClose } from "./Icons/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white w-full  relative z-50 border-b-2 border-dark_blue border-solid">
      <motion.nav
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        whileTap={{ border: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3, delay: 0.5, bounce: 0.7 }}
        viewport={{ ones: true }}
        className="md:gap-16 relative lg:mx-auto z-50 font-oswald lg:max-w-[1200px] md:max-w-[655px] min-h-[72px] justify-between px-4 md:mx-0 md:justify-center gap-24 lg:min-h-[112px] items-center flex lg:justify-between"
      >
        <img src={logoMob} alt="" className="lg:min-w-[305px]" />
        <div className="md:hidden lg:hidden">
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={menu}
            alt="Navigation Menu"
          />
        </div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div className="md:hidden popup flex justify-center  fixed z-50 -top-1">
              <motion.div
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ ones: true }}
                exit={{ x: 300, opacity: 0 }}
                className=""
              >
                <motion.ul 
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", bounce: 0.3 }}
                viewport={{ ones: true }}
                exit={{ x: 300, opacity: 0 }}
                className=" pb-[42px] flex justify-center items-center flex-col stroke pop-list bg-white text-center px-[158px] font-bold text-2xl font-oswald  ">
                  <CircleClose
                    onClick={() => setIsOpen(!isOpen)}
                    className="close_popUp relative left-32 top-4"
                  />

                  <li>
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skill">Skill</a>
                  </li>
                  <li>
                    <a href="#portfolio">Project</a>
                  </li>
                  <li className="pb-[42px]">
                    <a href="#">Contact</a>
                  </li>
                  <a target='_blank' href="/Vladyslav_Nechytailo_-_Junior_Developer.pdf">
                    <button className="btn1 hover:shadow-none ease-in  duration-75  md:block font-bold text-xl bg-bright_yellow py-3 px-8">
                      Resume
                    </button>
                  </a>
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex lg:flex lg:justify-between md:items-center gap-12">
          <ul className="stroke flex justify-center gap-6 font-bold text-sm lg:text-xl">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skill</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a target='_blank' href="/Vladyslav_Nechytailo_-_Junior_Developer.pdf">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn1 hidden hover:shadow-none ease-in  duration-75  md:block lg:block font-bold text-sm lg:text-lg bg-bright_yellow py-2.5 px-6 lg:py-4 lg:px-9"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
