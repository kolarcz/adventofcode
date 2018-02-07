exports.part1 = (input) => {
  let sum = 0;
  let pos = 0;

  const steps = input.split(/[\r\n]+/).map(Number);

  while (pos >= 0 && pos < steps.length) {
    pos += steps[pos]++;
    sum++;
  }

  return sum;
};

exports.part2 = (input) => {
  let sum = 0;
  let pos = 0;

  const steps = input.split(/[\r\n]+/).map(Number);

  while (pos >= 0 && pos < steps.length) {
    const move = steps[pos];
    steps[pos] = move + (move >= 3 ? -1 : 1);
    pos += move;
    sum++;
  }

  return sum;
};
