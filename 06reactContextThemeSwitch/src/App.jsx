import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider } from "./context/ThemeContext"

function App() {
    
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = (isDarkTheme) => {
      if(isDarkTheme)
        setThemeMode("dark");
      else
        setThemeMode("light");
    }

    useEffect(()=>{
      document.querySelector('html').classList.remove("light", "dark");
      document.querySelector('html').classList.add(themeMode);
    },[themeMode]);

    return (  
      <ThemeContextProvider value={{themeMode, toggleTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/*THEME SWITCHER BUTTONS  */}
                      <ThemeBtn/>
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                      {/* THEME SWITCHER CARDS */}
                      <Card/>
                  </div>
              </div>
          </div>
      </ThemeContextProvider>  
    )
}

export default App
