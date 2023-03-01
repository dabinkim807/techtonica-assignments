import { useState } from "react";


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
      <nav className="container">
        <div className="row align-items-center py-2">
          <div className="input-group col-sm">
            <span className="input-group-text" id="basic-addon1">
              City
            </span>
            <input
              type="text"
              className="form-control"
              inputMode="text"
              id="city"
              placeholder="city"
              aria-label="city"
              aria-describedby="basic-addon1"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>
        <div className="row align-items-center py-2">
          <div className="col-auto me-auto">
            <button
              id="btnGet"
              type="button"
              className="btn btn-primary mb-3"
              onClick={getWeatherByLocation}>
              Get Weather
            </button>
          </div>
        </div>
      </nav>
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