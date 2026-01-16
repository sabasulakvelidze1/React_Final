import axios from "axios";

const API_KEY = "88535385d5fb016e810862e78348fc30"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = (city) => {
  return axios.get(BASE_URL, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
};