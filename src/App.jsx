// App.js
import React, { useState } from "react"; // useEffect की अब ज़रूरत नहीं है यहाँ
import Navbar from "./components/navbar/Navbar.jsx"; // आपकी Navbar कॉम्पोनेंट
import Hero from "./components/Hero section/Hero.jsx";
import AboutMe from "./components/About me/aboutme.jsx";
import Education from "./components/Education/education.jsx";
// './App.css' की अब ज़रूरत नहीं है अगर इसमें सिर्फ body के थीम स्टाइल्स थे
// अगर आपके पास App.css में कोई और ग्लोबल स्टाइल्स हैं, तो उसे रख सकते हैं
// import './App.css';

function App() {
  // थीम की स्टेट को App.js में मैनेज करें
  const [theme, setTheme] = useState("dark"); // डिफ़ॉल्ट थीम 'light'

  
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Navbar currentTheme={theme} onToggleTheme={handleToggle} />
      <Hero currentTheme={theme} />
      <AboutMe currentTheme={theme}  />
      <Education currentTheme={theme}/>
    </div>
  );
}

export default App;
