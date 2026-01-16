import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const WeatherCard = ({ data }) => {
  const { t } = useContext(LanguageContext);

  const addFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = [...new Set([...saved, data.name])];
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p className="temp">{Math.round(data.main.temp)} °C</p>
      <p>{data.weather[0].description}</p>
      <button onClick={addFavorite}>{t.addFav}</button>
    </div>
  );
};

export default WeatherCard;
