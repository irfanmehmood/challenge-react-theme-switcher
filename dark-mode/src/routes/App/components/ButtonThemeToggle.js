
import React from 'react';
import ButtonThemeToggleIcon from './ButtonThemeToggleIcon';
const ButtonThemeToggle = () => {
  return (
    <>
      <button className="app__dark-mode-btn icon level-right">
          <ButtonThemeToggleIcon />
      </button>
    </>
  );
};

export default ButtonThemeToggle;
