import React from "react";
import styles from "./certificate.module.css";
import { FaEye } from "react-icons/fa"; 
import { BsFileEarmarkTextFill } from "react-icons/bs"; 


const certificateData = { 
  id: 1,
  title: "UI/UX DESIGNING",
  viewLink: "https://cert.diceid.com/cid/zdwm69lpfB", 
};

const Certificates = ({ currentTheme }) => {


  const handleViewClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`${styles.certificatesContainer} ${
        currentTheme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2 className={`${
              currentTheme === "light" ? styles.headerlight : styles.headerdark
            }`}>Certificates</h2>
      <div className={styles.certificateCards}> 
        <div
          key={certificateData.id} 
          className={`${styles.certificateCard} ${
            currentTheme === "light" ? styles.lightCard : ''
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
      </div>
    </div>
  );
};

export default Certificates;