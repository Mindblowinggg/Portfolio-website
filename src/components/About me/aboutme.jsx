import React from "react";
import styles from "./aboutme.module.css"; // Module CSS import
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
      <p className={styles.description}>
        A passionate Front End Developer with a Master's in Computer Application
        and over 3.9 years of experience in crafting captivating digital
        experiences. My expertise lies in leveraging cutting-edge technologies
        such as ReactJS, NextJS, Apollo GraphQL, Redux, React Query, and various
        UI frameworks including Material UI, NextUI, SCSS, Tailwind CSS, Chakra
        UI, and Bootstrap. I take pride in my ability to design seamless user
        interfaces and components that align perfectly with the intended
        aesthetic, creating responsive websites that adapt gracefully to any
        device. My skill set also extends to proficient API integration,
        ensuring the seamless flow of data between the front end and back end.
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
