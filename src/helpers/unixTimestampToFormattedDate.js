import ordinalDate from "./ordinalDate";

export default function unixTimestampToFormattedDate(unixTimestamp) {
  const dateString = new Date(unixTimestamp).toDateString();
  const [weekday, month, dayOfMonth] = dateString.split(" ");
  return `${weekday} ${ordinalDate(+dayOfMonth)} ${month}`;
}
