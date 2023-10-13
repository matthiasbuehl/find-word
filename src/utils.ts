export function simplePermutations(letters: string): string[] {
  if (letters.length === 0) return [];
  if (letters.length < 2) return [letters];

  let allPermutations: string[] = [];

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let otherLetters =
      letters.slice(0, i) + letters.slice(i + 1, letters.length);

    for (let permutation of simplePermutations(otherLetters)) {
      allPermutations.push(currentLetter + permutation);
    }
  }

  return allPermutations;
}

export function heapPermutations(letters: string): string[] {
  if (letters.length === 0) return [];

  let permutations: string[] = [];
  let characters = letters.split("");

  _heapPermutations(characters, characters.length, permutations);

  return permutations;
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
