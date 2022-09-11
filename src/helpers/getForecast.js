import axios from "axios";

const errorMessages = {
  404: "City not found",
  500: "Something went wrong with server, please try again",
};

export default async function getForecast({
  setLocation,
  setForecasts,
  setSelectedDate,
  setErrorMessage,
  city,
}) {
  const endPoint = `https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`;
  try {
    const forecast = await axios.get(endPoint);
    const { location, forecasts } = forecast.data;
    setSelectedDate(forecasts[0].date);
    setForecasts(forecasts);
    setLocation(location);
  } catch (error) {
    console.error(
      `${error.response.status} ${errorMessages[error.response.status]}`
    );
    setErrorMessage(errorMessages[error.response.status]);
  }
}
