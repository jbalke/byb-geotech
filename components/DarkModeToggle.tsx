/* eslint-disable @next/next/no-img-element */

import { setColorTheme } from 'actions/ui-actions';
import { useUIDispatch, useUIState } from 'context/ui-context';
import React, { ChangeEvent, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ColorTheme } from 'reducers/ui-reducer';

type DarkModeToggleProps = {};

function DarkModeToggle(props: DarkModeToggleProps) {
  const dispatch = useUIDispatch();
  const { theme } = useUIState();

  useEffect(() => {
    dispatch(setColorTheme(window.__theme as ColorTheme));
    window.__onThemeChange = () => {
      dispatch(setColorTheme(window.__theme as ColorTheme));
    };
  }, [dispatch]);

  return (
    <Toggle
      icons={{
        checked: (
          <img
            alt='moon'
            src='/images/moon.png'
            width='16'
            height='16'
            role='presentation'
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            alt='sun'
            src='/images/sun.png'
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
