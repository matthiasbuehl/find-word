export function simplePermutations(letters: string): string[] {
  if (letters.length === 0) return [];
  if (letters.length < 2) return [letters];

  let permutations: string[] = [];

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let otherLetters =
      letters.slice(0, i) + letters.slice(i + 1, letters.length);

    for (let permutation of simplePermutations(otherLetters)) {
      permutations.push(currentLetter + permutation);
    }
  }

  return Array.from(new Set(permutations));
}

export function heapPermutations(letters: string): string[] {
  if (letters.length === 0) return [];

  let permutations: string[] = [];
  let characters = letters.split("");

  _heapPermutations(characters, characters.length, permutations);

  return Array.from(new Set(permutations));
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
      swap(characters, 0, size - 1);
    } else {
      swap(characters, i, size - 1);
    }
  }
}

function swap(arr: string[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
