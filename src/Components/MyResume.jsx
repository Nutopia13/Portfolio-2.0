import React from "react";
import spiral from "../assets/Spiral.svg";
import arrow from "../assets/Checkout.svg";
import Running_Text_Tab from "./Running_Text_Tab";

const MyResume = () => {
  return (
    <div>
      <div>
        <div className="mt-[30px] z-30 lg:mt-20">
          <a target="_blank" href="/Vladyslav_Nechytailo_-_Junior_Developer.pdf">
            <img
              src={arrow}
              alt=""
              className="z-30 relative checkout w-[104px] lg:w-[200px] md:w-[91px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
