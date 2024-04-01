import { expect, assert } from "chai";
import { describe, it } from "mocha";
import { memoize } from "../es/index.js";

describe("function memoize", () => {
  function sum(numbers) {
    return numbers.reduce((s, num) => (s += num), 0);
  }
  const sumMemo = memoize(sum);
  const firstSum = sumMemo([1,3,5]);
  it("sumMemo([1,3,5]) memoize(sum(numbers)) should equal firstSum", () => {
    expect(sumMemo([1,3,5])).to.equal(firstSum);
  });
});
