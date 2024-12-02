import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode, data, currentLanguage } = useContext(UserContext);

  const darkMode = data?.[currentLanguage]?.top.modeButton || "DARK MODE";
  const lightMode = data?.[currentLanguage]?.top.lightMode || "LIGHT MODE";


  return (
    <div className='dm-button-text'>
      <button
        className={`relative inline-flex items-center cursor-pointer p-2 w-16 h-8 rounded-full transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-[#8F88FF]' : 'bg-gray-300'
        }`}
        onClick={toggleDarkMode}  // Toggle dark mode on button click
      >
        <span
          className={`absolute w-6 h-6 bg-[#FFE86E] rounded-full transform transition-all duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-7' : 'translate-x-0'
          }`}
        ></span>
      </button>
      <p className="text-secondary font-medium">{isDarkMode ? darkMode : lightMode}</p>
    </div>
  );
};

export default DarkModeButton;
