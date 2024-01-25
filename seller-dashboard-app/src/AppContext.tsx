import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AppContextType = {
  language: string;
  isDarkModeOn: boolean;
  toggleLanguage: () => void;
  toggleMode: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<string>('English');
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);

  const toggleLanguage = () => setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Polish' : 'English'));
  const toggleMode = () => setIsDarkModeOn((prevTheme) => (prevTheme === false ? true : false));

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  const context_value = { language, isDarkModeOn, toggleLanguage, toggleMode };

  return <AppContext.Provider value={context_value}> {children} </AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};
