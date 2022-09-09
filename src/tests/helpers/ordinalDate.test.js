import ordinalDate from "../../helpers/ordinalDate";

describe("ordinalDate", () => {
  describe("weekday getter", () => {
    it("returns the ordinalDate when given a date between 1 and 31", () => {
      const dates = {
        "1st": 1,
        "2nd": 2,
        "3rd": 3,
        "4th": 4,
        "5th": 5,
        "6th": 6,
        "7th": 7,
        "8th": 8,
        "9th": 9,
        "10th": 10,
        "11th": 11,
        "12th": 12,
        "13th": 13,
        "14th": 14,
        "15th": 15,
        "16th": 16,
        "17th": 17,
        "18th": 18,
        "19th": 19,
        "20th": 20,
        "21st": 21,
        "22nd": 22,
        "23rd": 23,
        "24th": 24,
        "25th": 25,
        "26th": 26,
        "27th": 27,
        "28th": 28,
        "29th": 29,
        "30th": 30,
        "31st": 31,
      };

      Object.entries(dates).forEach(([key, value]) => {
        expect(ordinalDate(value)).toEqual(key);
      });
    });
  });
});
