import { createContext } from 'react';

export const themeConfig = {
  currentTheme: 'light',
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  },
};

export const ThemeContext = createContext();
