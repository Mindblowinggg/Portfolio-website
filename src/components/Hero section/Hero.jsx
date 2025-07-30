import React, { useState, useEffect } from "react";
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import Reacticon from "./icons/reacticon";
import Htmlicon from "./icons/htmlicon";
import Jsicon from "./icons/jsicon";
import Cssicon from "./icons/cssicon";


const Hero = ({ currentTheme }) => {
  const fulltext = "A FrontEnd Developer";

  const [typedtext, settypedtext] = useState("A");

  const [currentIndex, setCurrentIndex] = useState(1);

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);
  useEffect(() => {
    if (currentIndex < fulltext.length) {
      const typingTimeout = setTimeout(() => {
        settypedtext(
          (prevTypedText) => prevTypedText + fulltext.charAt(currentIndex)
        );

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 90);
      return () => clearTimeout(typingTimeout);
    } else {
      setShowCursor(true);
      const resetTimeout = setTimeout(() => {
        settypedtext("A");
        setCurrentIndex(1);
        setShowCursor(true);
      }, 4000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fulltext]);

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
        <p
          className={`text-white text-3xl mt-5 ${
            currentTheme === "light"
              ? Herostyles.ptaglight
              : Herostyles.ptagdark
          }`}
        >
          {typedtext}

          <span
            className={Herostyles.cursor}
            style={{ opacity: showCursor ? 1 : 0 }}
          >
            |
          </span>
        </p>
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
