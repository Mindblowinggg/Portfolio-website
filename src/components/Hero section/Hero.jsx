import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import Reacticon from "./icons/reacticon";
import Htmlicon from "./icons/htmlicon";
import Jsicon from "./icons/jsicon";
import Cssicon from "./icons/cssicon";
import Typingeffect from "./typingeffect";
import Lottie from "lottie-react";
import PfpanimationLight from "./icons/man with laptop Light.json";
import PfpanimationDark from "./icons/man with laptop Dark.json";
import Helloanimation from "./icons/Hello.json";

const Hero = ({ currentTheme }) => {
  const videoUrls = [
    "https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/5377274/5377274-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/33230270/14159474_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/5585983/5585983-hd_1080_1920_30fps.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  return (
    <div
      className={`${Herostyles.container} ${
        currentTheme === "light"
          ? Herostyles.lightContainer
          : Herostyles.darkContainer
      }`}
    >
      {/* ----------- Background Video & Overlay ----------- */}
      <AnimatePresence>
        <motion.video
          key={currentVideoIndex}
          className={Herostyles.backgroundVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          loop={false}
        >
          <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
      <div
        className={`${
          currentTheme === "light"
            ? Herostyles.videoOverlayLight
            : Herostyles.videoOverlayDark
        }`}
      ></div>

      {/* ----------- Text & Resume Section ----------- */}
      <div className="justify-center flex flex-col items-center absolute top-[25%] md:top-[20%] left-[50%] -translate-x-[50%] z-10">
        <motion.h1
          className={`text-6xl flex items-center ${
            currentTheme === "light"
              ? Herostyles.headingLight
              : Herostyles.headingDark
          }`}
        >
          <motion.div className="w-18 h-18">
            <Lottie animationData={Helloanimation} />
          </motion.div>
          Hello! I'm
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className={`text-[#efae02] ml-3 ${
              currentTheme === "light"
                ? Herostyles.spanlight
                : Herostyles.spandark
            }`}
          >
            Aman Kahar
          </motion.span>
        </motion.h1>

        <Typingeffect currentTheme={currentTheme} />

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

      {/* ----------- Icons ----------- */}
      <Reacticon />
      <Htmlicon />
      <Jsicon />
      <Cssicon />
      {/* ----------- Lottie Animation ----------- */}
      <motion.div
        className={Herostyles.imageBottom}
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Lottie
          animationData={
            currentTheme === "light" ? PfpanimationLight : PfpanimationDark
          }
        />
      </motion.div>
    </div>
  );
};

export default Hero;
