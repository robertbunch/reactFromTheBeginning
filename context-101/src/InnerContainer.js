import React, {useContext, useCallback} from 'react';
import ThemedButton from './ThemedButton';
import ThemeContext from './contexts/themeContext';

function InnerContainer(props){

    // const setTheme = useContext(ThemeContext).setTheme;
    // const theme = useContext(ThemeContext).theme;
    const { theme, setTheme} = useContext(ThemeContext);

    return( 
        <div>
            <button onClick={(e)=>setTheme(theme === "Blue" ? "Red" : "Blue")}>
            {theme === "Blue" ? "Switch to red" : "Switch to Blue"}
            </button>
            <ThemedButton />
        </div>
    )
}

export default InnerContainer;
