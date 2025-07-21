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
            currentTheme === "light" ? styles.lightCard : "" // Apply lightCard class only if theme is light
          }`}
        >
          <div className={styles.timeline}>
            <FaCalendarAlt className={styles.icon} />
            <span>2017 - 2020</span>
          </div>
          <div className={styles.degreeInfo}>
            <div className={`${styles.degreeTag} ${styles.graduationTag}`}>
              <GiGraduateCap className={styles.tagIcon} />
              <span>Graduation</span>
            </div>
            <h3>
              Bachelor's Degree <span className={styles.major}>BCA</span>
            </h3>
            <p className={styles.universityLocation}>
              <GiGraduateCap className={styles.universityIcon} /> Veer Narmad
              South Gujarat University
            </p>
            <p className={styles.universityLocation}>
              <FaMapMarkerAlt className={styles.locationIcon} /> Surat, Gujarat,
              India
            </p>
          </div>
        </div>

        {/* Card for Post Graduation */}
        <div
          className={`${styles.educationCard} ${
            currentTheme === "light" ? styles.lightCard : "" // Apply lightCard class only if theme is light
          }`}
        >
          <div className={styles.timeline}>
            <FaCalendarAlt className={styles.icon} />
            <span>2020 - 2022</span>
          </div>
          <div className={styles.degreeInfo}>
            <div className={`${styles.degreeTag} ${styles.postGraduationTag}`}>
              <GiGraduateCap className={styles.tagIcon} />
              <span>Post Graduation</span>
            </div>
            <h3>
              Master's Degree <span className={styles.major}>MCA</span>
            </h3>
            <p className={styles.universityLocation}>
              <GiGraduateCap className={styles.universityIcon} /> Parul
              University
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
