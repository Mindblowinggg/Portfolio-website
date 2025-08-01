import React from "react";
import styles from "./skill.module.css";
import { FaHtml5 } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa";
import { TbFileTypeJsx } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Skills = ({ currentTheme }) => {
  return (
    <div
      className={`${styles.skillsContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2
        className={`${styles.heading}   ${
          currentTheme === "light" ? styles.titlelight : styles.titledark
        }`}
      >
        Skills
      </h2>

      {/* Design Tools Section */}
      <div className={styles.skillsGroup}>
        <h3
          className={`${styles.groupHeading} ${
            currentTheme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Design Tools I Use
        </h3>
        <div className={styles.skillsList}>
          <div className="flex justify-center items-center gap-2">
            <CgFigma />
            <p>Figma</p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className={`${styles.skillsGroup}`}>
        <h3
          className={`${styles.groupHeading} ${
            currentTheme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Technologies I Use
        </h3>
        <div className={`${styles.skillsList} `}>
          <div className="flex justify-center items-center gap-2">
            <FaHtml5 />
            <p>HTML5</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaCss3Alt />
            <p>CSS3</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <RiTailwindCssFill />
            <p>TAILWINDCSS</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <TbFileTypeJsx />
            <p>JSX</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaReact />
            <p>REACT</p>
          </div>
        </div>
      </div>

      {/* Development & Productivity Tools Section */}
      <div className={styles.skillsGroup}>
        <h3
          className={`${styles.groupHeading} ${
            currentTheme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Development & Productivity Tools I Use
        </h3>
        <div className={styles.skillsList}>
          <div className="flex justify-center items-center gap-2">
            <VscVscode />
            <p>VS CODE</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaGithub />
            <p>GITHUB</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a href="https://github.com/Mindblowinggg" target="blank">
          <button
            className={`px-10 flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400 transform transition-transform duration-300 hover:scale-105 ${
              currentTheme === "light"
                ? styles.resumeBtnLight
                : styles.resumeBtnDark
            }`}
          >
            <FaGithub className="mr-2" />
            See GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Skills;