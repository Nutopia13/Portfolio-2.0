import React from "react";
import example from "../assets/pexels-markus-spiske-360591(1).jpg";
import { HtmlIcon } from "./Icons/HTML";
import { ReactIcon } from "./Icons/React_Icon";
import { TailwindIcon } from "./Icons/Tailwind_Icon";
import { motion } from "framer-motion";
import arrowlink from "../assets/arrowLink.svg";
import { Javascript } from "./Icons/JavaScript";

const Portfolio_Components = (props) => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="lg:ml-28 md:ml-6 lg:min-w-[478px] min-w-[338px] pb-8 pl-5 flex flex-wrap flex-col">
        <div className="img_cont  drop-shadow-lg w-[460px] bg-contain h-[300px]">
          <a target="_blank" href={props.item.link}>
            <picture>
              <source srcSet={props.item.imageAvif} type="image/avif" />
              <img
                loading="lazy"
                src={props.item.image}
                alt=""
                className=" w-full port_img h-full"
              />
            </picture>
          </a>
        </div>
        <div className="port_text--cont md:max-w-[300px] lg:max-w-[400px] max-w-[340px] font-oswald lg:pt-10 pt-6 text-dark_blue text-left ">
          <div className="flex space-x-4 items-center ">
            <h3 className="port_card--title lg:text-4xl underline">
              <a target="_blank" href={props.item.link}>
                {props.item.title}
              </a>
            </h3>
            <a className="w-[8%]" target="_blank" href={props.item.link}>
              <img src={arrowlink} alt="" />
            </a>
          </div>
          <p className="pt-3 lg:5 text-base md:min-h-[90px] lg:min-h-[140px] lg:text-2xl opacity-70">
            {props.item.description}
          </p>
          <div className="flex  space-x-3 pt-5 items-center">
            <p className=" font-bold text-lg lg:text-2xl items-center">
              Tech Stack:
            </p>
            <div className="flex space-x-2">
              <img src={props.item.stack1} alt="" className="w-10" />
              <img src={props.item.stack2} alt="" className="w-10" />
              <img src={props.item.stack3} alt="" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Components;
