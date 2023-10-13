import allWords from "./all_words";
import { findWords } from "./word_search";

const letters = process.argv[2]?.split("=")?.[0];

if (!letters) {
  console.log("Usage: yarn find-words <letters> (e.g. yarn find-words oogd)");
  process.exit(0);
}

let words = findWords(letters, allWords);
console.log(words);
