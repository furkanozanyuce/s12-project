import { createContext, useEffect, useState } from "react";
import langugaesData from "../languages";
import axios from "axios";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [data, setData] = useState(langugaesData);
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [isDarkMode, setIsDarkMode] = useState(() => {

      const storedDarkMode = localStorage.getItem("darkMode");
      return storedDarkMode !== null
        ? storedDarkMode === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
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
        setIsDarkMode((prev) => !prev);
    };

    return (
        <UserContext.Provider value={{data, setData, currentLanguage, toggleLanguage, isDarkMode, toggleDarkMode}}>
            {children}
        </UserContext.Provider>
    )
}