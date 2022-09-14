export default function weekdayFromUnixTime(unixTime) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[new Date(unixTime).getDay()];
}
