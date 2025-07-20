// Navbar.jsx
import React from "react";
import Styles from "./Navbar.module.css";
import logo from "/A.png";
import DarkModeToggle from "./DarkModeBtn";

const Navbar = ({ currentTheme, onToggleTheme }) => {
  return (
    <nav
      className={`${Styles.navbar} ${
        currentTheme === "light" ? Styles.lightNavbar : Styles.darkNavbar
      } px-1 rounded-full`}
    >
      <div className={Styles.navbarLogo}>
        <img src={logo} className="w-15 h-15" alt="" />

        <p
          className={`${Styles.logoText} ${
            currentTheme === "light"
              ? Styles.amanKaharLight
              : Styles.amanKaharDark
          } ml-5`}
        >
          Aman
        </p>
        <p
          className={`${Styles.logoText} ${
            currentTheme === "light"
              ? Styles.amanKaharLight
              : Styles.amanKaharDark
          }`}
        >
          Kahar
        </p>
      </div>

      <div className={Styles.navbarMenuContainer}>
        <DarkModeToggle currentTheme={currentTheme} onToggle={onToggleTheme} />

        <button className={Styles.menuButton}>
          <span className="text-white hidden sm:flex mr-2">Menu</span> ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
