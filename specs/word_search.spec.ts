import { describe, expect, it } from "@jest/globals";
import { findWords } from "../src/word_search";

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

describe("findWords", () => {
  it("should find the words", () => {
    let words = findWords("oogd", allWords);
    expect(words.sort()).toEqual(
      ["good", "god", "dog", "goo", "do", "go"].sort()
    );
  });

  it("should no words for an empty input", () => {
    let words = findWords("", allWords);
    expect(words).toEqual([]);
  });

  it("should no words for 'bal'", () => {
    let words = findWords("bla", allWords);
    expect(words).toEqual([]);
  });
});
