import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";

describe("unixTimestampToFormattedDate", () => {
  it("returns human readable date when give unixTimestamp", () => {
    const date = 1525046400000;

    expect(unixTimestampToFormattedDate(date)).toEqual("Mon 30th Apr");
  });
});
