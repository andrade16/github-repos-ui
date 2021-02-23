import React from "react";
import { formatDateFromNow, formatDateByDay } from "../utils/helpers";
import moment from "moment";

describe("Date Format Helpers", () => {
  it("Should return today's date in MMM D, YYYY format", () => {
    const date = "2021-02-22T19:19:48.680-08:00";
    expect(formatDateByDay(date)).toEqual("Feb 22, 2021");
  });

  it("Should return a date in fromNow format", () => {
    const today = moment().toISOString(true);
    const yearAgo = moment(today).subtract(1, "years").toISOString(true);
    expect(formatDateFromNow(yearAgo)).toEqual("a year ago");
  });
});
