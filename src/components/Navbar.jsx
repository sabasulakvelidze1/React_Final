import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang, t } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ge" : "en");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <h2 className="logo">WeatherApp</h2>

      <div className="nav-right">
        <div className="nav-links">
          <Link to="/">{t.search}</Link>
          <Link to="/favorites">{t.favorites}</Link>
          <Link to="/about">{t.about}</Link>
        </div>

        <div className="nav-actions">
          <button className="nav-btn" onClick={toggleLanguage}>
            {lang.toUpperCase()}
          </button>

          <button
            className="nav-btn"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
