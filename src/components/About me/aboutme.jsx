import React from "react";
import { motion } from "framer-motion";
import styles from "./aboutme.module.css";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";

// Variants for the main container's opacity
const containerVariants = {
  hidden: { opacity: 0.9 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { scale: 0.6, opacity: 1 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 800,
    },
  },
};

// New variants for a smooth fade-in animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 }, // Starts invisible and slightly below its position
  visible: {
    opacity: 1,
    y: 0, // Slides up to its final position
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutMe = ({ currentTheme }) => {
  const text = "About Me";
  const letters = Array.from(text);

  return (
    <motion.div
      className={`${styles.aboutMeContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
           {" "}
      <h2
        className={`flex justify-center ${
          currentTheme === "light" ? styles.headinglight : styles.headingdark
        }`}
      >
               {" "}
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
                        {letter === " " ? "\u00A0" : letter}         {" "}
          </motion.span>
        ))}
             {" "}
      </h2>
           {" "}
      <motion.div
        className={styles.contentSection}
        variants={fadeInVariants} // fadeInVariants लगाया गया है
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
               {" "}
        <div className={styles.experienceCard}>
                    <h3>3+</h3>          <p>Project Completed</p>       {" "}
        </div>
             {" "}
      </motion.div>
           {" "}
      <motion.p
        className={`${styles.description} lg:text-xl`}
        variants={fadeInVariants} // fadeInVariants लगाया गया है
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
                Passionate front-end developer with a strong foundation in HTML,
        CSS,         JSX, and React. I build intuitive and responsive web
        applications         through self-initiated projects      {" "}
      </motion.p>
           {" "}
      <motion.div
        className={styles.hobbySection}
        variants={fadeInVariants} // fadeInVariants लगाया गया है
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
               {" "}
        <h3
          className={` ${
            currentTheme === "light"
              ? styles.hobbyTextlight
              : styles.hobbyTextdark
          }`}
        >
                    My Hobbies:        {" "}
        </h3>
               {" "}
        <div className={styles.interestTags}>
                   {" "}
          <div className={styles.tag}>
                        <PiMicrophoneStageFill />            Performer          {" "}
          </div>
                   {" "}
          <div className={styles.tag}>
                        <FaCarSide />            Travelling          {" "}
          </div>
                   {" "}
          <div className={styles.tag}>
                        <FaGamepad /> Gaming          {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </motion.div>
         {" "}
    </motion.div>
  );
};

export default AboutMe;
