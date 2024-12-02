import { createContext, useEffect, useState } from "react";
import langugaesData from "../languages";
import axios from "axios";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
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

    return (
        <UserContext.Provider value={{data, setData, currentLanguage, toggleLanguage}}>
            {children}
        </UserContext.Provider>
    )
}