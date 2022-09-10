import axios from "axios";

export default async function getForecast({
  setLocation,
  setForecasts,
  setSelectedDate,
  city,
}) {
  const endPoint = `https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`;
  const forecast = await axios.get(endPoint);
  const { location, forecasts } = forecast.data;

  setSelectedDate(forecasts[0].date);
  setForecasts(forecasts);
  setLocation(location);
}
