import React, { useEffect, useState } from "react";
import Herostyles from "./hero.module.css";

const Typingeffect = ({ currentTheme }) => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [showCursor, setShowCursor] = useState(true);

  // कर्सर ब्लिंकिंग इफ़ेक्ट
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // मुख्य टाइपिंग और डिलीटिंग लॉजिक
  useEffect(() => {
    const texts = [
      "A FrontEnd Developer",
      "Building Imagination into Reality",
      "A React Enthusiast",
    ];

    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(90);
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(60);
      }
    };

    if (!isDeleting && typedText === texts[textIndex]) {
      setTypingSpeed(1500);
      setIsDeleting(true);
    } 
    else if (isDeleting && typedText === "") {
      if (textIndex === texts.length - 1) {
        // आखिरी टेक्स्ट के बाद 3 सेकंड का लंबा पॉज़
        setTypingSpeed(1000); 
        setTimeout(() => {
          setIsDeleting(false);
          setTextIndex(0); // इंडेक्स को 0 पर वापस सेट करें
        }, 1000);
        return;
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1));
        setTypingSpeed(500);
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    
  }, [typedText, isDeleting, textIndex, typingSpeed]);

  return (
    <div>
      <p
        className={`text-3xl mt-5 ${
          currentTheme === "light" ? Herostyles.ptaglight : Herostyles.ptagdark
        }`}
      >
        {typedText}
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