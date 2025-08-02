import React from "react";
import { motion } from "framer-motion";
import styles from "./education.module.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

// Variants for the heading (individual letters)
const headingContainerVariants = {
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
      damping: 15,
      stiffness: 200,
    },
  },
};

// Variants for the fade-in animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Education = ({ currentTheme }) => {
  const text = "Education";
  const letters = Array.from(text);

  return (
    <div
      className={`${styles.educationContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      {/* Animated Heading */}
      <motion.h2
        className={`flex justify-center ${
          currentTheme === "light" ? styles.headinglight : styles.headingdark
        }`}
        variants={headingContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Education Cards */}
      <motion.div
        className={styles.educationCards}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Card for Graduation */}
        <div
          className={`${styles.educationCard} ${
            currentTheme === "light" ? styles.lightCard : ""
          }`}
        >
          <div className={styles.timeline}>
            <FaCalendarAlt className={styles.icon} />
            <span>2021 - 2025</span>
          </div>

          <div className={styles.degreeInfo}>
            <div className={`${styles.degreeTag} ${styles.graduationTag}`}>
              <GiGraduateCap className={styles.tagIcon} />
              <span>Graduation</span>
            </div>

            <h3>
              Bachelor's Degree <br />
              <span className={styles.major}>CSE</span>
            </h3>

            <p className={styles.universityLocation}>
              <GiGraduateCap className={styles.universityIcon} />
              Parul University
            </p>
            <p className={styles.universityLocation}>
              <FaMapMarkerAlt className={styles.locationIcon} /> Vadodara,
              Gujarat, India
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
