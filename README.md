# find-words

find-words is a node console application that extracts proper english words from a list of characters. This list of extractable words is limited to the 4000 most commonly used english words as defined by the file `/usr/share/dict/words` on a unix based system.

## Installation

Clone this repo and run:

```bash
yarn install
```

## Usage

From the project root directory run: `yarn find-words <letters>`.

```bash
# example
yarn find-words oogd

# returns
[
  'o',    'og',  'g',
  'd',    'go',  'goo',
  'good', 'od',  'god',
  'do',   'dog'
]

yarn find-words ooGd

# returns (case sensitive)
[ 'o', 'G', 'd', 'od', 'God', 'do' ]
```

## Tests

Run tests with:

```bash
yarn test
```

## Limitations

This tool uses [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm) to generate permutations of characters and is therefore limited by a runtime of O(n!).

## License

[MIT](https://choosealicense.com/licenses/mit/)
