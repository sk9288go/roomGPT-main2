import React, { createContext, useContext, useState } from "react";

interface LanguageContextProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState("ENG");

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
