import React, {useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from '../../../libs/ThemeContext';

const ButtonThemeToggleIcon = () => {

  const { 
      stateTheme, 
      dispatcherTheme, 
  } = useContext(ThemeContext);

  const switchToTheme = (stateTheme.themeName === 'dark-mode' ? 'default' : 'dark-mode');

  return (
    <FontAwesomeIcon
      icon={
        stateTheme.themeName === 'dark-mode' ? faMoon : faSun 
      }
      onClick={() => {
        dispatcherTheme({
          type: "saveTheme",
          payload: {'themeName' : switchToTheme},
        });
      }}
    />
  );
};

export default ButtonThemeToggleIcon;
