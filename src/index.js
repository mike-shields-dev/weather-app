import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import forecast from "./data/forecast.json";
import WeatherApp from "./components/WeatherApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherApp location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>
);
