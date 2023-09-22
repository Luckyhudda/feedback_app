import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) =>{

    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () =>{
   setIsDark(!isDark);
    }
 const theme = isDark ? 'dark' : 'light'

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        {!isDark && (
          <style>
            {`
            body {
              color: black;
              background: #cdcbcb;
            }
          `}
          </style>
        )}
        
      </ThemeContext.Provider>
    );
};

export default ThemeProvider;