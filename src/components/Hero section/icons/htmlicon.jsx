import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { motion } from "framer-motion";
import "./htmlicon.css";

const Htmlicon = () => {
  const handleHtmlIconClick = () => {
    window.open("https://html.spec.whatwg.org/multipage/", "_blank");
  };

  return (
    <motion.div
      onClick={handleHtmlIconClick}
      className="html-icon-container"
      initial={{ opacity: 0, scale: 0 }} // Start with opacity 0 and scale 0
      animate={{
        opacity: 1, // Animate opacity to 1 and keep it there
        scale: [1, 1.2, 1], // Only scale animates repeatedly
        
      }}
      transition={{
        opacity: {delay:0.8, duration: 1, ease: "easeInOut" }, // Opacity animation plays once
        scale: {
          
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        },
       
      }}
    >
      <ImHtmlFive color="#FF6D00" />
    </motion.div>
  );
};

export default Htmlicon;