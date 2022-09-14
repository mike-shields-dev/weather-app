import weekdayFromUnixTime from "../../helpers/weekdayFromUnixTime";

describe("weekdayFromUnixTime", () => {
  it("returns the day of the week from the given unix timestamp", () => {
    const weekdayToUnixTime = {
      Sunday: 1662883154000,
      Monday: 1662969554000,
      Tuesday: 1663055954000,
      Wednesday: 1663142354000,
      Thursday: 1663228754000,
      Friday: 1663315154000,
      Saturday: 1663401554000,
    };

    Object.entries(weekdayToUnixTime).forEach(([weekday, unixTime]) =>
      expect(weekdayFromUnixTime(unixTime)).toBe(weekday)
    );
  });
});
