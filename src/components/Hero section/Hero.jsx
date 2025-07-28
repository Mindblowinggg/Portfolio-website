import React, { useState, useEffect } from "react"; // Import useEffect and useState
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";

const Hero = ({ currentTheme }) => {
  const fullOccupationText = "A Frontend Developer"; 
  const [typedOccupationText, setTypedOccupationText] = useState('');
  const [occupationTextIndex, setOccupationTextIndex] = useState(0); 

  useEffect(() => {
    if (occupationTextIndex < fullOccupationText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedOccupationText(prevTypedText => prevTypedText + fullOccupationText.charAt(occupationTextIndex));
        setOccupationTextIndex(prevIndex => prevIndex + 1);
      }, 90); // Adjust typing speed here 

      return () => clearTimeout(typingTimeout);
    }
  }, [occupationTextIndex, fullOccupationText]); 

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
          {typedOccupationText} {/* Display the typed text here */}
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
        <img src="/pfp.png" alt="Profile" /> {/* Added alt text for accessibility */}
      </div>
    </div>
  );
};

export default Hero;