export default function ordinalDate(dayOfMonth) {
  if (dayOfMonth > 3 && dayOfMonth < 21) return `${dayOfMonth}th`;
  switch (dayOfMonth % 10) {
    case 1:
      return `${dayOfMonth}st`;
    case 2:
      return `${dayOfMonth}nd`;
    case 3:
      return `${dayOfMonth}rd`;
    default:
      return `${dayOfMonth}th`;
  }
}
