import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleButton = () => {
  const { data, currentLanguage } = useContext(LanguageContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);


  const darkMode = data?.[currentLanguage]?.top.modeButton || "DARK MODE";
  const lightMode = data?.[currentLanguage]?.top.lightMode || "LIGHT MODE";


  return (
    <div className='dm-button-text flex items-center gap-2.5'>
      <button
        className={`relative inline-flex items-center cursor-pointer p-2 w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-[#3A3A3A]' : 'bg-[#8F88FF]'
        }`}
        onClick={toggleDarkMode}
      >
        <span
          className={`absolute w-6 h-6 bg-[#FFE86E] rounded-full transform transition-all duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-0' : 'translate-x-5'
          }`}
        ></span>
      </button>
      <p className="for-mobile text-secondary dark:text-[#D9D9D9] font-medium">{isDarkMode ? lightMode : darkMode}</p>
    </div>
  );
};

export default ToggleButton;
