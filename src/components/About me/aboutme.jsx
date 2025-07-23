import React from "react";
import styles from "./aboutme.module.css"; 
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

const AboutMe = ({ currentTheme }) => {
  return (
    <div
      className={`${styles.aboutMeContainer}  ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2 className={` ${
        currentTheme === "light" ? styles.headinglight : styles.headingdark
      }`}>About Me</h2>
      <div className={styles.contentSection}>
        <div className={styles.experienceCard}>
          <h3>3+</h3>
          <p>Project Completed</p>
        </div>
      </div>
      <p className={`${styles.description} lg:text-xl` }>
       Passionate front-end developer with a strong foundation in HTML, CSS, JSX, and React. I build intuitive and responsive web applications through self-initiated projects
      </p>

      <div className={styles.hobbySection}>
        <h3 className={` ${
        currentTheme === "light" ? styles.hobbyTextlight : styles.hobbyTextdark
      }`}>My Hobbies:</h3>
        <div className={styles.interestTags}>
          <div className={styles.tag}>
            <PiMicrophoneStageFill />
            Performer
          </div>
          <div className={styles.tag}>
            {" "}
            <FaCarSide />
            Travelling
          </div>
          <div className={styles.tag}>
            {" "}
            <FaGamepad /> Gaming
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
