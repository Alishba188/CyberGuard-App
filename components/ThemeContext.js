// components/ThemeContext.js
import React, { createContext, useContext } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#BBBBBB',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#333333',
    notification: '#888888',
  },
};

const CustomLightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#333333',
    background: '#F2F2F2',
    card: '#FFFFFF',
    text: '#000000',
    border: '#CCCCCC',
    notification: '#888888',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const isDarkMode = false; // You can make this dynamic if needed
  const theme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
