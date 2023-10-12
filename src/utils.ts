export function getPermutations(word: string): string[] {
  if (word.length < 2) return [word];

  let allPermutations: string[] = [];

  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    let otherLetters = word.slice(0, i) + word.slice(i + 1, word.length);

    let permutations = getPermutations(otherLetters);

    for (let permutation of permutations) {
      allPermutations.push(currentLetter + permutation);
    }
  }

  return allPermutations;
}
