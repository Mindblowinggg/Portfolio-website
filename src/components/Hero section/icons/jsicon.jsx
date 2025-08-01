import React from 'react';
import JSicon from "/javascript.svg"
import { motion } from "framer-motion";

import "./jsicon.css"

const Jsicon = () => {
  const handleJSIconClick = () => {
    window.open("https://javascript.info/", "_blank");
  };

  return (
    <motion.div
      onClick={handleJSIconClick}
      className="js-icon-container "
      initial={{ opacity: 0, scale: 0 }} // Start with opacity 0 and scale 0
      animate={{
        opacity: 1, // Animate opacity to 1 and keep it there
        scale: [1, 1.15, 1], // Only scale animates repeatedly
       
      }}
      transition={{
        opacity: {delay:0.5, duration: 1, ease: "easeInOut" }, // Opacity animation plays once
        scale: {
          
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        },
       
      }}
    >
      <img src={JSicon} alt="JavaScript Icon" className="js-svg-image" />
    </motion.div>
  );
};

export default Jsicon;