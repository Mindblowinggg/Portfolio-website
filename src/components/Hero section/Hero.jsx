import React, { useState, useEffect } from "react";
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import Reacticon from "./icons/reacticon";
import Htmlicon from "./icons/htmlicon";
import Jsicon from "./icons/jsicon";
import Cssicon from "./icons/cssicon";
import Typingeffect from "./typingeffect";


const Hero = ({ currentTheme }) => {
  

  return (
    <div
      className={`${Herostyles.container} ${
        currentTheme === "light"
          ? Herostyles.lightContainer
          : Herostyles.darkContainer
      }`}
    >
      <div className="justify-center flex flex-col items-center absolute top-[25%] md:top-[20%] left-[50%] -translate-x-[50%]">
        <h1
          className={`text-6xl flex  ${
            currentTheme === "light"
              ? Herostyles.headingLight
              : Herostyles.headingDark
          }`}
        >
          Hello! I'm
          <span
            className={`text-[#efae02] ml-3 ${
              currentTheme === "light"
                ? Herostyles.spanlight
                : Herostyles.spandark
            } `}
          >
            Aman Kahar
          </span>
        </h1>
        <Typingeffect/>
        
        <a href="/RESUME.pdf" download="MyResume.pdf">
          <button
            className={`px-10 flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400 transform transition-transform duration-300 hover:scale-105 ${
              currentTheme === "light"
                ? Herostyles.resumeBtnLight
                : Herostyles.resumeBtnDark
            }`}
          >
            Resume
            <FiDownloadCloud className="ml-2" />
          </button>
        </a>
      </div>

      {/*----------------icons------------------------ */}
      <Reacticon />
      <Htmlicon/>
      <Jsicon/>
      <Cssicon/>
      

      <div className={Herostyles.imageBottom}>
        <img src="/pfp.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
