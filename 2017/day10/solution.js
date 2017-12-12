function createNumbers(length = 256) {
  return [...new Array(length)].map((tmp, i) => i);
}

function reverseNumbers(numbers, pos, length) {
  const halfLength = Math.ceil(length / 2);

  for (let i = 0; i < halfLength; i++) {
    const a = (pos + i) % numbers.length;
    const b = (pos + (length - 1 - i)) % numbers.length;
    [numbers[a], numbers[b]] = [numbers[b], numbers[a]];
  }
}

function runLengths(numbers, lengths, curr = 0, skip = 0) {
  let currentPosition = curr;
  let skipSize = skip;

  for (const length of lengths) {
    reverseNumbers(numbers, currentPosition, length);
    currentPosition += length + skipSize++;
  }

  return { currentPosition, skipSize };
}

function getHash(numbers) {
  const numbs = [...numbers];
  let hash = '';

  while (numbs.length) {
    const xor = numbs.splice(0, 16).reduce((a, b) => (a ^ b));
    const ch = xor.toString(16);
    hash += (ch.length > 1 ? '' : '0') + ch;
  }

  return hash;
}

exports.part1 = (input, numbsLength = 256) => {
  const lengths = input.split(',').map(Number);
  const numbers = createNumbers(numbsLength);

  runLengths(numbers, lengths);

  const result = numbers[0] * numbers[1];
  return result;
};

exports.part2 = input => {
  const lengths = [...input].map(ch => ch.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
  const numbers = createNumbers();

  let [currentPosition, skipSize] = [0, 0];
  for (let i = 0; i < 64; i++) {
    ({ currentPosition, skipSize } = runLengths(numbers, lengths, currentPosition, skipSize));
  }

  const hash = getHash(numbers);
  return hash;
};
