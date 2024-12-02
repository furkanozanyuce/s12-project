import { createContext, useEffect, useState } from "react";
import langugaesData from "../languages";
import axios from "axios";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [data, setData] = useState(langugaesData);
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);



    useEffect(() => {
      const browserLang = navigator.language || navigator.languages[0];
      const defaultLang = browserLang.startsWith("tr") ? "tr" : "en";
      setCurrentLanguage(defaultLang);
    }, []);

    useEffect(() => {
      if (data) {
        axios
          .post("https://reqres.in/api/workintech", data)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, [currentLanguage, data, setData]);

    const toggleLanguage = () => {
      setCurrentLanguage((prev) => (prev === "en" ? "tr" : "en"));
    }

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev); // Toggle dark mode state
    };

    return (
        <UserContext.Provider value={{data, setData, currentLanguage, toggleLanguage, isDarkMode, toggleDarkMode}}>
            {children}
        </UserContext.Provider>
    )
}