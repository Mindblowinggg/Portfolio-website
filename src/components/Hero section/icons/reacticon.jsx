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
         animate={{
            scale: [1,1.15,1], 
           filter: [
          "drop-shadow(0px 0px 0px rgba(83, 193, 222, 0.9))", 
          "drop-shadow(0px 0px 10px rgba(83, 193, 222, 1.2))", 
          "drop-shadow(0px 0px 5px rgba(83, 193, 222, 0.9))" 
        ],
         }}
         transition={{
           duration: 2, 
           ease: "easeInOut",
           repeat: Infinity, // इसे लगातार दोहराएं
           repeatType: "mirror" // एनीमेशन को आगे-पीछे दोहराएं
         }}
       >
         <FaReact color="#53C1DE" />
       </motion.div>
     );

};

export default Reacticon;
