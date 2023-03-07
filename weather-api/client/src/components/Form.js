import { useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";


const Form = (props) => {
  const [data, setData] = useState();
  const [city, setCity] = useState();

  // must be paired with onClick or onChange; function will not display by itself
  // function to fetch data from express to get hardcoded data
  const getWeatherByLocation = () => {
    fetch(`http://localhost:8080/api/weather?cityName=${city}`) // cityName and other params defined in server.js
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }

  // convert kelvins to fahrenheit w/ hardcoded data
  // function convertTemp(kelvins) {
  //   return Math.round(((kelvins - 273.15) * 9) / 5 + 32);
  // }

  return (
    <>
      <div className="form">
        <input
          type="text"
          id="city"
          placeholder="Type in a city name"
          onChange={(event) => setCity(event.target.value)}
        />

        <button
          id="button"
          type="button"
          className="icon"
          onClick={getWeatherByLocation}
          aria-label="Search">
          <FaSearch />
        </button>
      </div>

      {data ? (
        <Card
          icon={data.weather[0].icon}
          description={data.weather[0].description}
          city={data.name}
          tempMax={data.main.temp_max}
          // tempMax={convertTemp(data.main.temp_max)}
          tempMin={data.main.temp_min}
          // tempMin={convertTemp(data.main.temp_min)}
          feelsLike={data.main.feels_like}
          // feelsLike={convertTemp(data.main.feels_like)}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
        />
      ) : (
        <div className="empty"></div>
      )}
    </>
  );
};

export default Form;