import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import { getWeatherByCity, getForecastByCity } from "./services/weatherService";
import { Spinner } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCity(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError("Erreur lors de la récupération des données.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center"
         style={{
           backgroundColor: '#f0f8ff', // Fond clair (bleu pâle)
           minHeight: '100vh', 
           color: '#333'  // Texte sombre pour un bon contraste
         }}>
      <div className="text-center bg-white bg-opacity-75 p-5 rounded" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="display-4 mb-4">🌤 Application Météo</h1>
        <SearchBar onSearch={handleSearch} city={city} setCity={setCity} />
        
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            {error && <div className="alert alert-danger">{error}</div>}
            <WeatherDisplay weather={weather} />
            <Forecast forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
