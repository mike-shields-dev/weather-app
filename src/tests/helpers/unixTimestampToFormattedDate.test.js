import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";
import { forecasts } from "../../data/forecast.json";

describe("unixTimestampToFormattedDate", () => {
  it("returns human readable date when give unixTimestamp", () => {
    const { date: timestamp } = forecasts[0];

    expect(unixTimestampToFormattedDate(timestamp)).toEqual("Mon 30th Apr");
  });
});
