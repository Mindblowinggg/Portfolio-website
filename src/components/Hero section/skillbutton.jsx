import React from "react";

const SkillButton = ({ name, positionClasses, zIndex }) => {
  return (
    <div
      className={`flex absolute ${positionClasses} items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-300 w-36 ${zIndex}`}
    >
      <span className="text-lg font-medium text-center">{name}</span>
    </div>
  );
};

export default SkillButton;