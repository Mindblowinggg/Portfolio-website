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
      animate={{
        scale: [1], 
        filter: [
          "drop-shadow(0px 0px 5px rgba(255, 250, 205, 0.7))", // हल्का पीला ग्लो
          "drop-shadow(0px 0px 10px rgba(255, 250, 205, 0.9))", // मध्यम पीला ग्लो
          "drop-shadow(0px 0px 5px rgba(255, 250, 205, 0.7))"   // वापस हल्का पीला ग्लो
        ],
      }}
      transition={{
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity, // इसे लगातार दोहराएं
        repeatType: "mirror" // एनीमेशन को आगे-पीछे दोहराएं
      }}
    >


  <img src={JSicon} alt="JavaScript Icon" className="js-svg-image" />
      
      
    </motion.div>
  );
};

export default Jsicon;