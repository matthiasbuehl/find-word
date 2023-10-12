import { describe, expect, it } from "@jest/globals";
import { getPermutations } from "../src/utils";

describe("getPermutations", () => {
  it("should permute abc", () => {
    expect(getPermutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
});
