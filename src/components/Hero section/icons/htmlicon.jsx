import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { motion } from "framer-motion"; // Framer Motion import करें
import "./htmlicon.css"

const Htmlicon = () => {

    const handleHtmlIconClick = () => {
    window.open("https://html.spec.whatwg.org/multipage/", "_blank");
  };
  return (
    <motion.div
    onClick={handleHtmlIconClick}
       className="html-icon-container   "
      animate={{
        scale: [1,1.2,1], 
        filter: [
          "drop-shadow(0px 0px 0px rgba(255, 109, 0, 0.7))", 
          "drop-shadow(0px 0px 20px rgba(255, 109, 0, 0.9))", 
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
      <ImHtmlFive color="#FF6D00"  />
    </motion.div>
  );
};

export default Htmlicon;