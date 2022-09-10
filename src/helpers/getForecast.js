import axios from "axios";

export default async function getForecast() {
  const forecasts = await axios.get(
    "https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester"
  );
  return forecasts.data;
}
