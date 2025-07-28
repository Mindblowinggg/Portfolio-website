import React, { useState, useEffect } from "react";
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";

const Hero = ({ currentTheme }) => {
  const fulltext = "A FrontEnd Developer";

  const [typedtext, settypedtext] = useState("A");
  const [currentIndex, setCurrentIndex] = useState(1); // <--- इसे जोड़ा है

  useEffect(() => {

    if (currentIndex < fulltext.length) {
      // <--- currentIndex का उपयोग करें
      const typingTimeout = setTimeout(() => {
        settypedtext(
          (prevTypedText) => prevTypedText + fulltext.charAt(currentIndex)
        ); // <--- currentIndex का उपयोग करें
        setCurrentIndex((prevIndex) => prevIndex + 1); // <--- currentIndex को बढ़ाएं
      }, 90); // टाइपिंग की गति

      return () => clearTimeout(typingTimeout); // क्लीनअप
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
          className={`text-6xl ${
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
          {typedtext} {/* यहाँ typedtext ही डिस्प्ले करें */}
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

      <div className={Herostyles.imageBottom}>
        <img src="/pfp.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
