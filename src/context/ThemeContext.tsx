import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isWireframe: boolean;
  toggleWireframe: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isWireframe, setIsWireframe] = useState<boolean>(() => {
    const saved = localStorage.getItem('bpmts_wireframe_mode');
    return saved === 'true';
  });

  const toggleWireframe = () => {
    setIsWireframe((prev) => {
      const next = !prev;
      localStorage.setItem('bpmts_wireframe_mode', String(next));
      return next;
    });
  };

  useEffect(() => {
    // We can add classes to document element to simplify tailwind styling if needed
    if (isWireframe) {
      document.documentElement.classList.add('wireframe-mode');
    } else {
      document.documentElement.classList.remove('wireframe-mode');
    }
  }, [isWireframe]);

  return (
    <ThemeContext.Provider value={{ isWireframe, toggleWireframe }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
