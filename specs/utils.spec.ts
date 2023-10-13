import { describe, expect, it } from "@jest/globals";
import { simplePermutations, heapPermutations } from "../src/utils";

describe("simplePermutations", () => {
  let algo = simplePermutations;

  it("should permute abc", () => {
    expect(algo("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });

  it("should have one permutations for 'aa'", () => {
    expect(algo("aa").sort()).toEqual(["aa"]);
  });

  it("should have no permutations for empty string", () => {
    expect(algo("").sort()).toEqual([]);
  });
});

describe("heapPermutations", () => {
  let algo = heapPermutations;

  it("should permute abc", () => {
    expect(algo("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });

  it("should have one permutations for 'aa'", () => {
    expect(algo("aa").sort()).toEqual(["aa"]);
  });

  it("should have no permutations for empty string", () => {
    expect(algo("").sort()).toEqual([]);
  });
});
