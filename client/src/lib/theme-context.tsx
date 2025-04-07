import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create a default context value to avoid undefined errors
const defaultContextValue: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Safely access localStorage
const getLocalStorage = (key: string, fallback: any) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return fallback;
  }
};

const setLocalStorage = (key: string, value: any) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting localStorage:', error);
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setMounted(true);
    
    // Initialize theme from localStorage or system preference
    const savedTheme = getLocalStorage('theme', null);
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else if (typeof window !== 'undefined' && 
               window.matchMedia && 
               window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Store the theme in localStorage
    setLocalStorage('theme', theme);
    
    // Apply theme to the root element
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Avoid rendering children until the theme is initialized
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};