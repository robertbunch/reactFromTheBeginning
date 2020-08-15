import React, { useState, useContext } from 'react';
import ThemeContext from './contexts/themeContext';
import MainContainer from './MainContainer'

function App() {

  const [ theme, setTheme ] = useState("Blue")
  console.log(ThemeContext)
  
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <h1>App component</h1>
      <button onClick={(e)=>setTheme(theme === "Blue" ? "Red" : "Blue")}>
          {theme === "Blue" ? "Switch to red" : "Switch to Blue"}
      </button>
      <MainContainer />
    </ThemeContext.Provider>
  );
}

export default App;
