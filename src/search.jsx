import { useEffect, useState } from 'react';

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5cf58b0535a959354ee10cb9a0f6eb03";

const getWeather = async (cityName) => {
  try {
    const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    let weatherData = {
      city: data.name,
      temperature: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      feelsLike: data.main.feels_like,
      pressure: data.main.pressure,
      seaLevel: data.main.sea_level,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      clouds: data.clouds.all,
      windDir: data.wind.deg,
    };
    return weatherData;
  } catch (err) {
    setError(err.message);
    return null;
  }
};

  useEffect(() => {
    const fetchInitial = async () => {
      const defaultData = await getWeather("Hyderabad");
      if (defaultData) {
        updateInfo(defaultData); // ← sends to WeatherApp.jsx
      }
    };

    fetchInitial();
  }, []);

  const handleChange = (event) => {
    setCity(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInfo = await getWeather(city);
    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl shadow-lg border border-blue-500">
      <h1 className="text-4xl font-bold text-white text-center mb-6">🌤️ Weather App</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg"
        >
          Search
        </button>
      </form>
      {error && <p className="mt-4 text-red-400 text-center font-medium">{error}</p>}
    </div>
  );
}
