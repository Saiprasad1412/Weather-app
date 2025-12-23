export default function WeatherInfo({ info }) {
  if (!info) {
    return (
      <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-gray-900 rounded-xl shadow-xl text-white text-center">
        <h2 className="text-2xl font-semibold">⚠️ No weather data available</h2>
        <p className="text-gray-400 mt-2">Please search for a city to view weather information.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-6 py-8 bg-gray-900 rounded-xl shadow-xl text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        📍 Weather Information for <span className="text-blue-400">{info.city}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Temperature Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow border border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-300">🌡️ Temperature</h3>
          <ul className="space-y-2">
            <li>Temperature: {info.temperature}°C</li>
            <li>Feels Like: {info.feelsLike}°C</li>
            <li>Min Temp: {info.tempMin}°C</li>
            <li>Max Temp: {info.tempMax}°C</li>
          </ul>
        </div>

        {/* Wind Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow border border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-300">💨 Wind</h3>
          <ul className="space-y-2">
            <li>Wind Speed: {info.windSpeed} m/s</li>
            <li>Wind Direction: {info.windDir}°</li>
            <li>Pressure: {info.pressure} hPa</li>
            <li>Sea Level: {info.seaLevel ? `${info.seaLevel} ft` : "N/A"}</li>
          </ul>
        </div>

        {/* Condition Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow border border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-300">☁️ Condition</h3>
          <ul className="space-y-2">
            <li>Description: {info.description}</li>
            <li>Humidity: {info.humidity}%</li>
            <li>Clouds: {info.clouds}%</li>
            <li>Sunrise: 🌅 {info.sunrise}</li>
            <li>Sunset: 🌇 {info.sunset}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
