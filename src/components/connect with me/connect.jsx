import React from "react";
import styles from "./connect.module.css";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Connect = ({ currentTheme }) => {
  return (
    <div
      className={`${styles.connectContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2 className={`${styles.heading} ${styles.connectContainer} ${
        currentTheme === "light" ? styles.headinglight : styles.headingdark
      }`}>Connect With Me</h2>


      <div className={styles.socialLinksGrid}>
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/aman-kahar-111453267/" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialCard} ${
            currentTheme === "light" ? styles.lightCard : styles.darkCard
          }`}
        >
          <div className={styles.socialIconWrapper}>
            <FaLinkedinIn className={styles.socialIcon} />
          </div>
          <span className={styles.socialName}>LinkedIn</span>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/marc_usb47/" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialCard} ${
            currentTheme === "light" ? styles.lightCard : styles.darkCard
          }`}
        >
          <div className={styles.socialIconWrapper}>
            <FaInstagram className={styles.socialIcon} />
          </div>
          <span className={styles.socialName}>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Connect;