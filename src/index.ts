import allWords from "./all_words";
import { findWords } from "./word_search";

const letters = process.argv[2]?.split("=")?.[1];

if (!letters) {
  console.log("Usage: yarn go letters=<letters> e.g. yarn go oogd");
  process.exit(1);
}

let words = findWords(letters, allWords);
console.log(words);
