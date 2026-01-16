import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeCity = (city) => {
    const updated = favorites.filter(item => item !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="page favorites">
      <h1>{t.favorites}</h1>

      {favorites.length === 0 && <p>{t.noFav}</p>}

      <div className="favorites-grid">
        {favorites.map((city, i) => (
          <div key={i} className="fav-card">
            <span>{city}</span>
            <button onClick={() => removeCity(city)}>✖</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
