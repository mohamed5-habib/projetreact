const Forecast = ({ forecast }) => {
    if (!forecast) return null;
  
    const dailyForecasts = forecast.list.filter((_, index) => index % 8 === 0);
  
    return (
      <div className="mt-4">
        <h3 className="text-center text-white mb-4">📅 Prévisions pour les prochains jours</h3>
        <div className="row justify-content-center">
          {dailyForecasts.map((day, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card text-center shadow-lg bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">{new Date(day.dt_txt).toLocaleDateString("fr-FR", { weekday: "long" })}</h5>
                  <p className="fs-4">{day.main.temp}°C</p>
                  <p className="card-text">{day.weather[0].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  