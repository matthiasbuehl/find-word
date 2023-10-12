import { describe, expect, it } from "@jest/globals";
import { findWords } from "../src/word_search";

describe("findWords", () => {
  it("should find the words", () => {
    let allWords = new Set([
      "good",
      "god",
      "dog",
      "goo",
      "do",
      "go",
      "bad",
      "hello",
    ]);
    let words = findWords("oogd", allWords);
    expect(words.sort()).toEqual(
      ["good", "god", "dog", "goo", "do", "go"].sort()
    );
  });
});
