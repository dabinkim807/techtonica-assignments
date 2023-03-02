import './App.css';
import { useState } from "react";
import Form from "./components/Form";


function App() {

  return (
    <div>
      <header>
        <h1>Dana's OpenWeatherMap.org API</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;