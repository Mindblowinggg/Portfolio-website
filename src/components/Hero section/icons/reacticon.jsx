import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "./reacticon.css";

const Reacticon = () => {
  const handleReactIconClick = () => {
    window.open("https://react.dev", "_blank");
  };

  return (
    <motion.div
      onClick={handleReactIconClick}
      className="react-icon-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1, // Opacity reaches 1 and stays there
        scale: [1, 1.15, 1], // Only scale animates repeatedly
        filter: [
          "drop-shadow(0px 0px 0px rgba(83, 193, 222, 0.9))",
          "drop-shadow(0px 0px 10px rgba(83, 193, 222, 1.2))",
          "drop-shadow(0px 0px 5px rgba(83, 193, 222, 0.9))"
        ],
      }}
      transition={{
        opacity: {delay:1.5, duration: 1, ease: "easeInOut" }, // Opacity transition
        scale: {
          delay: 1, // Start scale animation after opacity finishes
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity, // Repeat only the scale and filter
        },
        filter: {
          delay: 1,
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
    >
      <FaReact color="#53C1DE" />
    </motion.div>
  );
};

export default Reacticon;