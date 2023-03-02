import { useState } from "react";
import Card from "./Card";


const Form = (props) => {
  const [data, setData] = useState();
  const [city, setCity] = useState();

  // must be paired with onClick or onChange; function will not display by itself
  // function to fetch data from express to get hardcoded data
  const getWeatherByLocation = () => {
    fetch("http://localhost:8080/api/weather")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }

  function convertTemp(kelvins) {
    return Math.round(((kelvins - 273.15) * 9) / 5 + 32);
  }

  return (
    <>
      <div>
        <input
          type="text"
          className="form"
          id="city"
          placeholder="City"
          onChange={(event) => setCity(event.target.value)}
        />
      </div>

      <div>
        <button
          id="button"
          type="button"
          onClick={getWeatherByLocation}>
          Get Weather
        </button>
      </div>

      {data ? (
        <Card
          icon={data.weather[0].icon}
          description={data.weather[0].description}
          city={data.name}
          tempMax={convertTemp(data.main.temp_max)}
          tempMin={convertTemp(data.main.temp_min)}
          feelsLike={convertTemp(data.main.feels_like)}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
        />
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default Form;