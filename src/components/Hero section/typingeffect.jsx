import React, { useEffect, useState } from "react";
import Herostyles from "./hero.module.css";

const Typingeffect = (currentTheme ) => {
  const fulltext = "A FrontEnd Developer";

  const [typedtext, settypedtext] = useState("A");

  const [currentIndex, setCurrentIndex] = useState(1);

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);
  useEffect(() => {
    if (currentIndex < fulltext.length) {
      const typingTimeout = setTimeout(() => {
        settypedtext(
          (prevTypedText) => prevTypedText + fulltext.charAt(currentIndex)
        );

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 90);
      return () => clearTimeout(typingTimeout);
    } else {
      setShowCursor(true);
      const resetTimeout = setTimeout(() => {
        settypedtext("A");
        setCurrentIndex(1);
        setShowCursor(true);
      }, 4000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fulltext]);

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
