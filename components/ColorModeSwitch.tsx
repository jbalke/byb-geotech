import React, { useState } from 'react';
import Switch from 'rc-switch';
import { Theme, DarkTheme } from 'styles/theme';

type ColorModeSwitchProps = {};

function ColorModeSwitch(props: ColorModeSwitchProps) {
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>(() => {
    const mode = window.localStorage.getItem('darkmode');
    return mode === 'dark' ? 'dark' : 'light';
  });

  const updateStyles = () => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(darkMode);
  };

  const toggleDarkMode = () => {
    if (darkMode === 'light') {
      window.localStorage.setItem('darkmode', 'dark');
      setDarkMode('dark');
    } else {
      window.localStorage.setItem('darkmode', 'light');
      setDarkMode('light');
    }

    updateStyles();
  };

  updateStyles();

  return (
    <Switch
      onChange={toggleDarkMode}
      checked={darkMode === 'dark'}
      checkedChildren='D'
      unCheckedChildren='L'
    />
  );
}

export default ColorModeSwitch;
