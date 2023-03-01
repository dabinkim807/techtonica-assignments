import './App.css';
import { useState } from "react";


function App() {
  const [data, setData] = useState("");

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

  return (
    <div className="App">
      This is my React!
    </div>
  );
}

export default App;