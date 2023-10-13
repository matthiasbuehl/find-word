import { heapPermutations as getPermutations } from "./utils";
// import { permutations as getPermutations } from "./utils";

export function findWords(letters: string, allWords: Set<string>): string[] {
  if (letters.length === 0) return [];

  let validWords: string[] = [];
  let permutations = getPermutations(letters);

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

  // Time complexity of O(n^2) is not ideal, but we start simple.
  // Also, the time complexity O(n!) of heap's algorithm is the true limitation.
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
