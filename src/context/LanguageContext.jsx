import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    search: "Search Weather",
    favorites: "Favorites",
    about: "About",
    city: "City name",
    addFav: "Add to Favorites",
    noFav: "No favorites yet",
    aboutText: "Modern React Weather App using API, Router, Context and SCSS"
  },
  ge: {
    search: "ამინდის ძიება",
    favorites: "ფავორიტები",
    about: "შესახებ",
    city: "ქალაქის სახელი",
    addFav: "ფავორიტებში დამატება",
    noFav: "ფავორიტები ჯერ არ გაქვს",
    aboutText: "რეაქტის ამინდის აპლიკაცია API, Router, Context და SCSS გამოყენებით"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
