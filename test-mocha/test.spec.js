var assert = require("assert");

const { func } = require("../src/index");

describe("func", () => {
  it("should equal 0", () => {
    assert.equal(func(), 0);
  });
});
