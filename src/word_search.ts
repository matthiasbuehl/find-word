import { heapPermutations } from "./utils";

export function findWords(word: string, allWords: Set<string>): string[] {
  if (word.length === 0) return [];

  let validWords: string[] = [];
  let permutations = heapPermutations(word);

  for (let p of permutations) {
    validWords = validWords.concat(findWordsInPermutation(p, allWords));
  }

  return Array.from(new Set(validWords));
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
