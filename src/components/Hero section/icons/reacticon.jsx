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
      }}
      transition={{
        opacity: { delay: 1.4, duration: 1, ease: "easeInOut" },
        scale: {
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
