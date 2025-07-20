
import React from "react";
import Herostyles from "./hero.module.css";
import SkillButton from "./skillbutton";
import { FiDownloadCloud } from "react-icons/fi";

const Hero = ({ currentTheme }) => {
  return (
    <div
      className={`${Herostyles.container} ${
        currentTheme === "light" ? Herostyles.lightContainer : Herostyles.darkContainer
      }`}
    >
      <div className="justify-center flex flex-col items-center absolute top-[15%] left-[50%] -translate-x-[50%]">
        <h1
          className={`text-6xl ${
            currentTheme === "light" ? Herostyles.headingLight : Herostyles.headingDark
          }`}
        >
          Hello! I'm <span className={`text-[#efae02]  ${currentTheme==="light"? Herostyles.spanlight: Herostyles.spandark} `}>Aman Kahar</span>
        </h1>
        <p className={`text-white text-3xl mt-5 ${currentTheme==="light" ? Herostyles.ptaglight:Herostyles.ptagdark}`}>A Frontend Developer</p>
        <a href="/RESUME.pdf" download="MyResume.pdf">
          <button
             className={`px-10  flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400   transform transition-transform duration-300 hover:scale-105 ${
              currentTheme === "light" ? Herostyles.resumeBtnLight : Herostyles.resumeBtnDark
            }`}
          >
            Resume
            <FiDownloadCloud className="ml-2" />
          </button>
        </a>
      </div>

      {/* Skill Buttons are already here */}
      <SkillButton name="NextJS" positionClasses="bottom-[30%] left-[30%]" zIndex="z-100" />
      <SkillButton name="Tailwind CSS" positionClasses="bottom-[20%] left-[27%]" />
      <SkillButton name="ReactJS" positionClasses="bottom-[10%] left-[35%]" zIndex="z-900" />
      <SkillButton name="JavaScript" positionClasses="bottom-[30%] left-[60%]" zIndex="z-50" />
      <SkillButton name="GraphQL" positionClasses="bottom-[20%] left-[65%]" />
      <SkillButton name="Figma" positionClasses="bottom-[10%] left-[60%]" zIndex="z-900" />

      <div
        className={`${Herostyles.pfp} ${
          currentTheme === "light" ? Herostyles.pfpLight : Herostyles.pfpDark
        }`}
      ></div>
    </div>
  );
};

export default Hero;