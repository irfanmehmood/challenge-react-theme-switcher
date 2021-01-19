import React, {useReducer} from 'react';
import {ThemeContext} from '../../libs/ThemeContext';
import ThemeReducer from '../../libs/ThemeReducer';

export default function App({ children }) {

  /** We now have a global state them variable in our context, we can access this context from anywhere */
  const [stateTheme, dispatcherTheme] = useReducer(ThemeReducer.reducer, ThemeReducer.initialState);

  return <>
    <ThemeContext.Provider value={{stateTheme, dispatcherTheme}}>
      <div className={stateTheme.themeName}>{children} </div>;
    </ThemeContext.Provider>
  </>
}