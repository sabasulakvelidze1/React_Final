import { useState, useContext } from "react";
import { getWeather } from "../api/weatherApi";
import WeatherCard from "../components/WeatherCard";
import Modal from "../components/Modal";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [open, setOpen] = useState(false);
  const { t } = useContext(LanguageContext);

  const search = async () => {
    try {
      const res = await getWeather(city);
      setWeather(res.data);
      setOpen(true);
    } catch {
      alert("City not found");
    }
  };

  return (
    <div className="page home">
      <h1>{t.search}</h1>

      <div className="search-box">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={t.city}
        />
        <button onClick={search}>Search</button>
      </div>

      {open && (
        <Modal close={() => setOpen(false)}>
          <WeatherCard data={weather} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
