import allWords from "./allWords";
import { heapPermutations } from "./utils";

export default function findWords(
  word: string,
  allWords: Set<string>
): Set<string> {
  if (word.length === 0) new Set<string>();

  let validWords: string[] = [];
  let permutations = heapPermutations(word);

  for (let p of permutations) {
    validWords = validWords.concat(findWordsInPermutation(p, allWords));
  }

  return new Set(validWords);
}

function findWordsInPermutation(
  permutation: string,
  allWords: Set<string>
): string[] {
  let validWords: string[] = [];

  for (let i = 0; i < permutation.length; i++) {
    for (let j = i + 1; j <= permutation.length; j++) {
      let potentialWord = permutation.substring(i, j);
      if (allWords.has(potentialWord)) {
        validWords.push(potentialWord);
      }
    }
  }
  return validWords;
}

let words = findWords("fhdjeugh", allWords);
console.log(words);
