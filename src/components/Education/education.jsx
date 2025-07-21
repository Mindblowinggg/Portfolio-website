import React from "react";
import styles from "./education.module.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi"; // For the university icon

const Education = ({ currentTheme }) => {
  return (
    <div
      className={`${styles.educationContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2
        className={` ${
          currentTheme === "light" ? styles.headinglight : styles.headingdark
        }`}
      >
        Education
      </h2>
      <div className={styles.educationCards}>

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
              Bachelor's Degree <br /><span className={styles.major}>CSE</span>
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
      </div>
    </div>
  );
};

export default Education;
