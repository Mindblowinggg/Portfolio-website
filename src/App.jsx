// App.js
import React, { useState } from "react"; // useEffect की अब ज़रूरत नहीं है यहाँ
import Navbar from "./components/navbar/Navbar.jsx"; // आपकी Navbar कॉम्पोनेंट
import Hero from "./components/Hero section/Hero.jsx";
import AboutMe from "./components/About me/aboutme.jsx";
import Education from "./components/Education/education.jsx";
import Certificates from "./components/certificate/certificate.jsx";
import Skills from "./components/skills/skills.jsx";
import Connect from "./components/connect with me/connect.jsx";


function App() {

  const [theme, setTheme] = useState("dark"); 

  
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Navbar currentTheme={theme} onToggleTheme={handleToggle} />
      <Hero currentTheme={theme} />
      <AboutMe currentTheme={theme}  />
      <Education currentTheme={theme}/>
      <Certificates currentTheme={theme} />
      <Skills currentTheme={theme}/>
      <Connect  currentTheme={theme} />
    </div>
  );
}

export default App;
