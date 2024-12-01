import { createContext, useState } from "react";
import langugaesData from "../languages";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [data, setData] = useState(langugaesData);

    return (
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
}