import React, { useState, useEffect } from "react";
import Herostyles from "./hero.module.css"; // CSS Module import
import { FiDownloadCloud } from "react-icons/fi";

const Hero = ({ currentTheme }) => {
  const fulltext = "A FrontEnd Developer";
  // typedtext की शुरुआती वैल्यू 'A' है
  const [typedtext, settypedtext] = useState('A');
  // currentIndex 1 से शुरू होगा, क्योंकि इंडेक्स 0 (A) पहले ही typedtext में है
  const [currentIndex, setCurrentIndex] = useState(1);
  // कर्सर की विजिबिलिटी को कंट्रोल करने के लिए स्टेट
  const [showCursor, setShowCursor] = useState(true);

  // --- कर्सर ब्लिंकिंग लॉजिक ---
  useEffect(() => {
    // हर 500ms में showCursor की वैल्यू को टॉगल करें
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // क्लीनअप फंक्शन: जब कंपोनेंट अनमाउंट हो तो इंटरवल को साफ करें
    return () => clearInterval(cursorInterval);
  }, []); // खाली डिपेंडेंसी एरे: यह useEffect सिर्फ एक बार चलेगा जब कंपोनेंट माउंट होगा

  // --- टाइपिंग इफेक्ट लॉजिक ---
  useEffect(() => {
    // अगर टेक्स्ट पूरा टाइप नहीं हुआ है
    if (currentIndex < fulltext.length) {
      const typingTimeout = setTimeout(() => {
        // prevTypedText का उपयोग करें ताकि हमेशा सबसे हाल की वैल्यू पर अपडेट हो
        settypedtext((prevTypedText) => prevTypedText + fulltext.charAt(currentIndex));
        // prevIndex का उपयोग करें ताकि हमेशा सबसे हाल की वैल्यू पर अपडेट हो
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 90); // टाइपिंग की गति (मिलीसेकंड में)

      // क्लीनअप फंक्शन: जब कंपोनेंट अपडेट हो या अनमाउंट हो तो टाइमआउट को साफ करें
      return () => clearTimeout(typingTimeout);
    } else {
      // टेक्स्ट पूरा टाइप हो गया है, अब लूप के लिए रीसेट करें
      setShowCursor(true); // टाइपिंग खत्म होने पर कर्सर को हमेशा दिखाएं
      const resetTimeout = setTimeout(() => {
        settypedtext('A');   // टेक्स्ट को 'A' पर रीसेट करें
        setCurrentIndex(1); // इंडेक्स को 1 पर रीसेट करें
        setShowCursor(true); // रीसेट होने पर कर्सर दिखाएं
      }, 4000); // 2 सेकंड (2000ms) का इंतज़ार फिर से शुरू होने से पहले

      // क्लीनअप फंक्शन: रीसेट टाइमआउट को साफ करें
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fulltext]); // डिपेंडेंसी एरे: जब currentIndex या fulltext बदलें तो useEffect फिर चलेगा

  return (
    <div
      className={`${Herostyles.container} ${
        currentTheme === "light"
          ? Herostyles.lightContainer
          : Herostyles.darkContainer
      }`}
    >
      <div className="justify-center flex flex-col items-center absolute top-[25%] md:top-[20%] left-[50%] -translate-x-[50%]">
        <h1
          className={`text-6xl ${
            currentTheme === "light"
              ? Herostyles.headingLight
              : Herostyles.headingDark
          }`}
        >
          Hello! I'm
          <span
            className={`text-[#efae02] ml-3 ${
              currentTheme === "light"
                ? Herostyles.spanlight
                : Herostyles.spandark
            } `}
          >
            Aman Kahar
          </span>
        </h1>
        <p
          className={`text-white text-3xl mt-5 ${
            currentTheme === "light"
              ? Herostyles.ptaglight
              : Herostyles.ptagdark
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
        <a href="/RESUME.pdf" download="MyResume.pdf">
          <button
            className={`px-10 flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400 transform transition-transform duration-300 hover:scale-105 ${
              currentTheme === "light"
                ? Herostyles.resumeBtnLight
                : Herostyles.resumeBtnDark
            }`}
          >
            Resume
            <FiDownloadCloud className="ml-2" />
          </button>
        </a>
      </div>

      <div className={Herostyles.imageBottom}>
        <img src="/pfp.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;