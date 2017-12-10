function redistribute(numbers) {
  const maxBankPos = numbers.indexOf(Math.max(...numbers));
  let tmpBank = numbers[maxBankPos];
  numbers[maxBankPos] = 0;

  for (let i = maxBankPos + 1; tmpBank; i++, tmpBank--) {
    numbers[i % numbers.length]++;
  }
}

function findLoop(input) {
  const numbers = input.split(/\s/).map(Number);
  const history = new Map();

  let steps = 0;
  let last = numbers.toString();

  while (!history.has(last)) {
    history.set(last, steps++);
    redistribute(numbers);
    last = numbers.toString();
  }

  return {
    steps,
    loop: steps - history.get(last)
  };
}

exports.part1 = input =>
  findLoop(input).steps;

exports.part2 = input =>
  findLoop(input).loop;
