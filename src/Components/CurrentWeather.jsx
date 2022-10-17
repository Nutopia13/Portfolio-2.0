const CurrentWeather = ({ data }) => {
    return (
      <div className="current_weather drop-shadow-2xl">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon animate-pulse"
            src={`Weather_Icons/${data.weather[0].icon}.svg`}
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-title text-lg font-bold">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;