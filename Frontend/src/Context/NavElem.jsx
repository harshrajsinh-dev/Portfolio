import React, { createContext, useState, useContext, useRef } from 'react';

export const NavContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export const useTheme = () => useContext(NavContext);

export const NavElemProvider = ({ children }) => {
    const NavElemRef = useRef(null)
    const childElem = "<div className='bg-red-300 h-full w-full p-10  absolute top-0 left-0 opacity-50 pointer-events-none' />"
    const updatePosition = (elem) => {
   
        console.log("adsf", NavElemRef.current.getBoundingClientRect())
    }
    const contextValue = {
        NavElemRef,
        updatePosition
    };

    return (
        <NavContext.Provider value={contextValue}>
            {children}
        </NavContext.Provider>
    );
};
