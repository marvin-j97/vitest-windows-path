import { describe, it, expect } from "vitest";
import { func } from "../src/index";

describe("func", () => {
  it("should equal 0", () => {
    expect(func()).to.equal(0);
  });
});
