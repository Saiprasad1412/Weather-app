import { useState } from 'react';
import Search from './search.jsx';
import WeatherInfo from './WeatherInfo.jsx';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    description: "",
    windSpeed: 0,
    feelsLike: 0,
    pressure: 0,
    seaLevel: 0,
    sunrise: "",
    sunset: "",
    clouds: 0,
    windDir: "NW",
  });

  const updateWeatherData = (newInfo) => {
    setWeatherData(newInfo);
  };

  const backgroundImage = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63";

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for readability */}
      <div className="min-h-screen w-full  ">
        <main className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
          <Search updateInfo={updateWeatherData} />
          <WeatherInfo info={weatherData} />
        </main>

        <footer className="mt-10 text-center text-sm text-black-600 dark:text-black-600">
          <p>Made with ❤️ using React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default WeatherApp;
