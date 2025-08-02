import React from "react";
import { motion } from "framer-motion";
import styles from "./aboutme.module.css";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";

// Variants for the heading animation
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 23,
      stiffness: 1000,
     
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
    >
      <motion.h2
        className={` ${
          currentTheme === "light" ? styles.headinglight : styles.headingdark
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>

      <div className={styles.contentSection}>
        <div className={styles.experienceCard}>
          <h3>3+</h3>
          <p>Project Completed</p>
        </div>
      </div>
      <p className={`${styles.description} lg:text-xl`}>
        Passionate front-end developer with a strong foundation in HTML, CSS,
        JSX, and React. I build intuitive and responsive web applications
        through self-initiated projects
      </p>

      <div className={styles.hobbySection}>
        <h3
          className={` ${
            currentTheme === "light"
              ? styles.hobbyTextlight
              : styles.hobbyTextdark
          }`}
        >
          My Hobbies:
        </h3>
        <div className={styles.interestTags}>
          <div className={styles.tag}>
            <PiMicrophoneStageFill />
            Performer
          </div>
          <div className={styles.tag}>
            <FaCarSide />
            Travelling
          </div>
          <div className={styles.tag}>
            <FaGamepad /> Gaming
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
