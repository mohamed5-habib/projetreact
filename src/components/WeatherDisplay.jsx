const WeatherDisplay = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div className="mt-4 p-4 rounded shadow-lg bg-dark text-white">
        <h2>{weather.name}</h2>
        <div className="d-flex justify-content-center">
          <p className="fs-1">{weather.main.temp}°C</p>
        </div>
        <p><strong>💧 Humidité :</strong> {weather.main.humidity}%</p>
        <p><strong>🌬 Vent :</strong> {weather.wind.speed} m/s</p>
        <p><strong>☁️ Conditions :</strong> {weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherDisplay;