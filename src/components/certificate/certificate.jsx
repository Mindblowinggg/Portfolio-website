import React from "react";
import { motion } from "framer-motion";
import styles from "./certificate.module.css";
import { FaEye } from "react-icons/fa";
import { BsFileEarmarkTextFill } from "react-icons/bs";

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

const certificateData = {
  id: 1,
  title: "UI/UX DESIGNING",
  viewLink: "https://cert.diceid.com/cid/zdwm69lpfB",
};

const Certificates = ({ currentTheme }) => {
  const text = "Certificates";
  const letters = Array.from(text);

  const handleViewClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`${styles.certificatesContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <motion.h2
        className={`${
          currentTheme === "light" ? styles.headerlight : styles.headerdark
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

      <motion.div
        className={styles.certificateCards}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div
          key={certificateData.id}
          className={`${styles.certificateCard} ${
            currentTheme === "light" ? styles.lightCard : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <BsFileEarmarkTextFill className={styles.certificateIcon} />
          </div>
          <h3 className={styles.certificateTitle}>{certificateData.title}</h3>
          <button
            className={styles.viewButton}
            onClick={() => handleViewClick(certificateData.viewLink)}
          >
            <FaEye className={styles.viewIcon} /> View
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;
