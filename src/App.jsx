// App.js
import React, { useState, useEffect } from "react"; 
import Navbar from "./components/navbar/Navbar.jsx"; 
import Hero from "./components/Hero section/Hero.jsx";
import AboutMe from "./components/About me/aboutme.jsx";
import Education from "./components/Education/education.jsx";
import Certificates from "./components/certificate/certificate.jsx";
import Skills from "./components/skills/skills.jsx";
import Connect from "./components/connect with me/connect.jsx";

function App() {
  // useState को localStorage से वैल्यू लेने के लिए अपडेट करें
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  // theme में बदलाव होने पर उसे localStorage में सेव करें
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Navbar currentTheme={theme} onToggleTheme={handleToggle} />
      <Hero currentTheme={theme} />
      <AboutMe currentTheme={theme} />
      <Education currentTheme={theme} />
      <Certificates currentTheme={theme} />
      <Skills currentTheme={theme} />
      <Connect currentTheme={theme} />
    </div>
  );
}

export default App;