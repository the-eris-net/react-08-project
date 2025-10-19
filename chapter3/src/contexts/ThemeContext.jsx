import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  /* 현재 기본이 다크모드 */
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);
  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <ThemeContext value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}