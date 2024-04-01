import { expect, assert } from "chai";
import { describe, it } from "mocha";
import { timeFormat } from "../es/index.js";

describe("function timeFormat", () => {
  const result = timeFormat(new Date('2023-5-30'), 'yyyy-MM-dd hh:mm:ss');
  it("timeFormat(new Date('2023-5-30'), 'yyyy-MM-dd hh:mm:ss') should equal 2023-05-30 00:00:00", () => {
    expect(result).to.equal('2023-05-30 00:00:00');
  });
});
