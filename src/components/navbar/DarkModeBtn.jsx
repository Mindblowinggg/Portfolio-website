// DarkModeBtn.jsx (या DarkModeToggle.jsx)
import React from "react"; // अब यहाँ useState या useEffect की ज़रूरत नहीं है
import "./darkmode.css"; // आपके टॉगल बटन की स्टाइलिंग

// DarkModeBtn कॉम्पोनेंट अब प्रॉप्स लेगा: currentTheme और onToggle
// currentTheme: यह बताएगा कि अभी कौन सी थीम एक्टिव है ('light' या 'dark')
// onToggle: यह एक फ़ंक्शन होगा जिसे बटन क्लिक होने पर कॉल करना है
const DarkModeBtn = ({ currentTheme, onToggle }) => {
  return (
    <label className="switch"> {/* 'class' की जगह 'className' का उपयोग करें */}
      <input
        checked={currentTheme === 'light'}
        onClick={onToggle}
        id="checkbox" 
        type="checkbox"
      />
      <span className="slider">
        {/* आपके SVG और स्टार्स जो टॉगल बटन का डिज़ाइन बनाते हैं */}
        <div className="star star_1"></div>
        <div className="star star_2"></div>
        <div className="star star_3"></div>
        <svg viewBox="0 0 16 16" className="cloud_1 cloud">
          <path
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
            fill="#fff"
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
          ></path>
        </svg>
      </span>
    </label>
  );
};

export default DarkModeBtn;