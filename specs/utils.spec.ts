import { describe, expect, it } from "@jest/globals";
import { simplePermutations, heapPermutations } from "../src/utils";

describe("simplePermutations", () => {
  it("should permute abc", () => {
    expect(simplePermutations("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });
});

describe("heapPermutations", () => {
  it("should permute abc", () => {
    expect(heapPermutations("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });
});
