import React from "react";
import arrowlink from "../assets/arrowLink.svg";

const Portfolio_Component_Mob = (props) => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="m-auto min-w-[340px] pt-2 pb-8 flex flex-wrap flex-col">
        <div className="img_cont drop-shadow-md w-[325px] h-[210px] bg-contain">
          <a target="_blank" href={props.link}>
            <img
              loading="lazy"
              src={props.image}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
        <div className="port_text--cont max-w-[340px] font-oswald pt-8 text-dark_blue text-left ">
          <div className="flex space-x-4 items-center ">
            <h3 className="port_card--title lg:text-4xl underline">
              <a target="_blank" href={props.link}>
                {props.title}
              </a>
            </h3>
            <a className="w-[8%]" target="_blank" href={props.link}>
              <img src={arrowlink} alt="" />
            </a>
          </div>
          <p className="pt-3  text-base  min-h-[100px] opacity-70">
            {props.description}
          </p>
          <div className="flex  space-x-3 pt-5 items-center">
            <p className=" font-bold text-lg items-center">Tech Stack:</p>
            <div className="flex space-x-1">
              {props.stack1}
              {props.stack2}
              {props.stack3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Component_Mob;
