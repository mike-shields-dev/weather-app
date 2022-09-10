import axios from "axios";

const endPoint =
  "https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester";

export default async function getForecast({
  setLocation,
  setForecasts,
  setSelectedDate,
}) {
  const forecast = await axios.get(endPoint);
  const { location, forecasts } = forecast.data;

  setSelectedDate(forecasts[0].date);
  setForecasts(forecasts);
  setLocation(location);
}
