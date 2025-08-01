import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "./Navbar.module.css";
import logo from "/A.png";
import DarkModeToggle from "./DarkModeBtn";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = ({ currentTheme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opendropdown, setopendropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setopendropdown(false);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setopendropdown(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 2.2, type: "spring" }}
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
          <div
            className={` relative ${
              currentTheme === "light"
                ? Styles.menudivlight
                : Styles.menudivdark
            }`}
          >
            <a
              className="flex justify-center items-center"
              onClick={() => setopendropdown(!opendropdown)}
            >
              Projects{" "}
              {opendropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </a>

            {opendropdown && (
              <div
                className={` absolute ${
                  currentTheme === "light"
                    ? Styles.drop1divlight
                    : Styles.drop1divdark
                }`}
              >
                <a
                  href="https://example-eight-fawn.vercel.app/"
                  target="blank"
                  onClick={closeAllMenus}
                >
                  project 1
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
