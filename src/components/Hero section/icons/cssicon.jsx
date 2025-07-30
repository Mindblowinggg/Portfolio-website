import React from "react";
import { FaCss3Alt } from "react-icons/fa6";
import { motion } from "framer-motion"; // Framer Motion import करें
import "./cssicon.css"

const Cssicon = () => {

    const handleCssIconClick = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
  };
  return (
    <motion.div
    onClick={handleCssIconClick}
       className="css-icon-container   "
      animate={{
        scale: [1,1.1,1], 
        filter: [
          "drop-shadow(0px 0px 0px rgba(255, 109, 0, 0.7))", 
          "drop-shadow(0px 0px 10px rgba(255, 109, 0, 0.9))", 
          "drop-shadow(0px 0px 5px rgba(255, 109, 0, 0.7))"   
        ],
      }}
      transition={{
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity, // इसे लगातार दोहराएं
        repeatType: "mirror" // एनीमेशन को आगे-पीछे दोहराएं
      }}
    >
      <FaCss3Alt color="#FF6D00"  />
    </motion.div>
  );
};

export default Cssicon;