import React, { useEffect, useState } from "react";
import Herostyles from "./hero.module.css";

const Typingeffect = ({ currentTheme }) => { // Destructure currentTheme
  const fulltext = "A FrontEnd Developer";

  const [typedtext, settypedtext] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false); // New state to control start

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // --- New useEffect for the initial delay ---
  useEffect(() => {
    const initialDelayTimeout = setTimeout(() => {
      setStartTyping(true); // Set to true after 1 second
    }, 1300); // 1000 milliseconds = 1 second

    return () => clearTimeout(initialDelayTimeout); // Clean up timeout
  }, []); // Run only once on component mount

  // Typing logic
  useEffect(() => {
    if (!startTyping) { // Don't start typing until startTyping is true
      return;
    }

    if (currentIndex < fulltext.length) {
      const typingTimeout = setTimeout(() => {
        settypedtext((prevTypedText) => prevTypedText + fulltext.charAt(currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 90);
      return () => clearTimeout(typingTimeout);
    } else {
      setShowCursor(true);
      
    }
  }, [currentIndex, fulltext, startTyping]); // Add startTyping to dependency array

  return (
    <div>
      <p
        className={`text-white text-3xl mt-5 ${
          currentTheme === "light" ? Herostyles.ptaglight : Herostyles.ptagdark
        }`}
      >
        {typedtext}
        <span
          className={Herostyles.cursor}
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          |
        </span>
      </p>
    </div>
  );
};

export default Typingeffect;