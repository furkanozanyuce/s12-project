import { createContext, useEffect, useState } from "react";
import langugaesData from "../languages";
import axios from "axios";


export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const [data, setData] = useState(langugaesData);
    const [currentLanguage, setCurrentLanguage] = useState("en");

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
        <LanguageContext.Provider value={{data, setData, currentLanguage, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}