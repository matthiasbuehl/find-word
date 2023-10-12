export function permutations(word: string): string[] {
  if (word.length === 0) return [];
  if (word.length < 2) return [word];

  let allPermutations: string[] = [];

  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    let otherLetters = word.slice(0, i) + word.slice(i + 1, word.length);

    for (let permutation of permutations(otherLetters)) {
      allPermutations.push(currentLetter + permutation);
    }
  }

  return allPermutations;
}

export function heapPermutations(word: string): string[] {
  if (word.length === 0) return [];

  let allPermutations: string[] = [];
  let characters = word.split("");

  _heapPermutations(characters, characters.length, allPermutations);

  return allPermutations;
}

function _heapPermutations(
  characters: string[],
  size: number,
  permutations: string[] = []
) {
  if (size == 1) {
    permutations.push(characters.join(""));
  }

  for (let i = 0; i < size; i++) {
    _heapPermutations(characters, size - 1, permutations);

    if (size % 2 === 1) {
      let temp = characters[0];
      characters[0] = characters[size - 1];
      characters[size - 1] = temp;
    } else {
      let temp = characters[i];
      characters[i] = characters[size - 1];
      characters[size - 1] = temp;
    }
  }
}
