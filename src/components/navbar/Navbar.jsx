import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import logo from "/A.png";
import DarkModeToggle from "./DarkModeBtn";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = ({ currentTheme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles the state between true and false
  };

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
        <div className="flex justify-center items-center">
          <span className={Styles.modetext}>
            {currentTheme === "light" ? (
              <>
                {"Switch to "}
                <br />
                {" Dark Mode"}
              </>
            ) : (
              <>
                {"Switch to "}
                <br />
                {" Light Mode"}
              </>
            )}
          </span>

          <IoIosArrowRoundForward />
        </div>
        <DarkModeToggle currentTheme={currentTheme} onToggle={onToggleTheme} />
        <div className="relative">
          <button
            onClick={() => toggleMenu()}
            className={` ${
              currentTheme === "light"
                ? Styles.menubtnLight
                : Styles.menubtnDark
            }`}
          >
            {/* Conditional Rendering of Icons */}
            {menuOpen ? (
              <RiCloseFill
                className={` size-5 ${
                  currentTheme === "light" ? Styles.menuLight : Styles.menuDark
                }`}
              />
            ) : (
              <RiMenu4Fill
                className={` size-5 ${
                  currentTheme === "light" ? Styles.menuLight : Styles.menuDark
                }`}
              />
            )}
          </button>
        </div>
        {/* --- CONDITIONAL MENU DIV --- */}
        {menuOpen && (
          <div className={Styles.menudiv}>
            <a>Projects</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
