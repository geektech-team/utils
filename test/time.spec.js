import { expect } from "chai";
import { describe, it } from "mocha";
import { beginningOfDate, endOfDate } from "../dist/index.js";

describe("function beginningOfDate", () => {
  const result = beginningOfDate(new Date('2023-5-30 11:11:11'));
  it("beginningOfDate(new Date('2023-5-30 11:11:11')) should equal 2023-05-30 00:00:00", () => {
    expect(result.getTime()).to.equal(new Date('2023-5-30').getTime());
  });
  it("endOfDate(new Date('2023-5-30 11:11:11')) should equal 2023-5-30 23:59:59.999", () => {
    expect(endOfDate(new Date('2023-5-30 11:11:11')).getTime()).to.equal(new Date('2023-5-30 23:59:59.999').getTime());
  });
});
