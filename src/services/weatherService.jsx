import axios from "axios";

const API_KEY = "d61edc51946c9a93f9fc731610a48d99"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "fr",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    return null;
  }
};

export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "fr",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des prévisions :", error);
    return null;
  }
};

