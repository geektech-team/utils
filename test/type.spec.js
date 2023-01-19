import { expect, assert } from "chai";
import { describe, it } from "mocha";
import {
  isArray,
  isBlob,
  isEmptyObject,
  isFile,
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
} from "./../dist/index.es.js";

describe("function isArray", () => {
  it("isArray([]) should equal true", () => {
    expect(isArray([])).to.be.true;
  });
  it("isArray({}) should equal false", () => {
    expect(isArray({})).to.be.false;
  });
});

describe("function isObject", () => {
  it("isObject({}) should equal true", () => {
    expect(isObject({})).to.be.true;
  });
  it("isObject([]) should equal false", () => {
    expect(isObject([])).to.be.false;
  });
});

describe("function isString", () => {
  it("isString('aaa') should equal true", () => {
    expect(isString("aaa")).to.be.true;
  });
  it("isString(111) should equal false", () => {
    expect(isString(111)).to.be.false;
  });
});

describe("function isNumber", () => {
  it("isNumber(111) should equal true", () => {
    expect(isNumber(111)).to.be.true;
  });
  it("isNumber('aaa') should equal false", () => {
    expect(isNumber("aaa")).to.be.false;
  });
});

describe("function isRegExp", () => {
  it("isRegExp(new RegExp('a')) should equal true", () => {
    expect(isRegExp(new RegExp("a"))).to.be.true;
  });
  it("isRegExp('aaa') should equal false", () => {
    expect(isRegExp("aaa")).to.be.false;
  });
});

describe("function isUndefined", () => {
  it("isUndefined({}.b) should equal true", () => {
    expect(isUndefined({}.b)).to.be.true;
  });
  it("isUndefined('aaa') should equal false", () => {
    expect(isUndefined("aaa")).to.be.false;
  });
});

describe("function isFunction", () => {
  it("isFunction(() => {}) should equal true", () => {
    expect(isFunction(() => {})).to.be.true;
  });
  it("isFunction('aaa') should equal false", () => {
    expect(isFunction("aaa")).to.be.false;
  });
});

describe("function isEmptyObject", () => {
  it("isEmptyObject(() => {}) should equal true", () => {
    expect(isEmptyObject({})).to.be.true;
  });
  it("isEmptyObject({a: 'aaa'}) should equal false", () => {
    expect(isEmptyObject({ a: "aaa" })).to.be.false;
  });
});
