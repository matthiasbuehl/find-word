import { describe, expect, it } from "@jest/globals";
import { permutations, heapPermutations } from "../src/utils";

describe("permutations", () => {
  it("should permute abc", () => {
    expect(permutations("abc").sort()).toEqual(
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
