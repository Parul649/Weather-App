import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 13.86,
    humidity: 81,
    temp: 14.26,
    tempMax: 14.26,
    tempMin: 14.26,
    weather: "broken clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox weatherInfo={weatherInfo}/>
    </div>
  );
}
