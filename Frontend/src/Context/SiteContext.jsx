import { createContext, useContext, useEffect, useState } from "react";

const SiteContext = createContext(null);

export const useSite = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
    const [activeField, setActiveField] = useState(null);
    useEffect(() => {
        console.log(activeField)
    }, [activeField])
    
    const handleMouseOver = (e) => {
        setActiveField(e.target.innerText);
    };

    const handleMouseLeave = () => {
        setActiveField(null);
    };

    return (
        <SiteContext.Provider
            value={{
                activeField,
                handleMouseOver,
                handleMouseLeave,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
};
