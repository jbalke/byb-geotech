import React, { ChangeEvent, useEffect, useState } from 'react';
import Toggle from 'react-toggle';

type DarkModeToggleProps = {};

function DarkModeToggle(props: DarkModeToggleProps) {
  const [theme, setTheme] = useState<string>(null!);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <Toggle
      icons={{
        checked: (
          <img
            src='/moon.png'
            width='16'
            height='16'
            role='presentation'
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            src='/sun.png'
            width='16'
            height='16'
            role='presentation'
            style={{ pointerEvents: 'none' }}
          />
        ),
      }}
      checked={theme === 'dark'}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
      }
    />
  );
}

export default DarkModeToggle;
