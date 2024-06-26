import { expect, assert } from "chai";
import { describe, it } from "mocha";
import { deepClone } from "../es/index.js";

describe("function deepClone", () => {
  const originalData = {
    a: 1,
    b: "old",
    c: [1, 2, 3],
    e: new Date(),
  };
  const result = deepClone(originalData);
  result.b = "new";
  result.c[3] = 4;
  it("originalData.a should equal result.a", () => {
    expect(originalData.a).to.equal(result.a);
  });
  it("originalData.b should return old", () => {
    expect(originalData.b).to.equal("old");
  });
  it("result.b should return new", () => {
    expect(result.b).to.equal("new");
  });
  it("originalData.c.length should return 3", () => {
    assert.lengthOf(originalData.c, 3);
  });
  it("result.c.length should return 4", () => {
    assert.lengthOf(result.c, 4);
  });
  it("result.e.getTime should return originalData.e.getTime", () => {
    // console.log(1, result.e.getTime());
    // console.log(2, originalData.d);
    expect(result.e.getTime()).to.equal(originalData.e.getTime());
  });
  originalData.d = originalData;
  it("deepClone(originalData).d should return target.d", () => {
    const target = deepClone(originalData);
    expect(target.d).to.eql(target.d);
    expect(target.d.a).to.equal(1);
  });
});
