import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "./reactIcon.css";

const Reacticon = () => {
  const handleReactIconClick = () => {
    window.open("https://react.dev", "_blank");
  };

  return (
    <div className="react-icon-container">
      <motion.div
        onClick={handleReactIconClick}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.div
          initial={{ filter: "drop-shadow(0 0 0px rgba(97, 219, 251, 0))" }}
          animate={{
            filter: [
              "drop-shadow(0 0 15px rgba(97, 219, 251, 0.9))",
              "drop-shadow(0 0 35px rgba(97, 219, 251, 1.2))",
              "drop-shadow(0 0 15px rgba(97, 219, 251, 0.7))",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <FaReact color="#61DBFB" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Reacticon;
