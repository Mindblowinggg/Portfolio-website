import React from "react";
import { FaCss3Alt } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./cssicon.css";

const Cssicon = () => {
  const handleCssIconClick = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
  };

  return (
    <motion.div
      onClick={handleCssIconClick}
      className="css-icon-container"
      initial={{ opacity: 0, scale: 0 }} // Start completely hidden
      animate={{
        opacity: 1, // Fade in to full opacity
        scale: [1, 1.15, 1], // Scale animation repeats
        filter: [
          "drop-shadow(0px 0px 0px rgba(255, 109, 0, 0.7))",
          "drop-shadow(0px 0px 10px rgba(255, 109, 0, 0.9))",
          "drop-shadow(0px 0px 5px rgba(255, 109, 0, 0.7))"
        ],
      }}
      transition={{
        opacity: { delay:1,duration: 1, ease: "easeInOut" }, // Opacity animates once
        scale: {
          delay: 1, // Start scale after opacity finishes
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        },
        filter: {
          delay: 1, // Start filter after opacity finishes
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        },
      }}
    >
      <FaCss3Alt color="#FF6D00" />
    </motion.div>
  );
};

export default Cssicon;