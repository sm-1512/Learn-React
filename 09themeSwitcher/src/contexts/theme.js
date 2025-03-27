import React, { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "Light", // Default theme is "Light"
    darkTheme: () => {}, // Empty function (to be replaced later)
    lightTheme: () => {}, //// Empty function (to be replaced later)

    //This means: If a component uses ThemeContext but no Provider is wrapping it, these default values will be used.
})
//createContext() creates a React Context called ThemeContext.

export const ThemeProvider = ThemeContext.Provider; 
//A shorthand way to use ThemeContext.Provider. 
// This allows us to wrap components with <ThemeProvider> and provide actual values for themeMode, darkTheme, and lightTheme.

export default function useTheme() {
    return useContext(ThemeContext)
}
//useTheme() is a custom hook that makes it easy to access ThemeContext