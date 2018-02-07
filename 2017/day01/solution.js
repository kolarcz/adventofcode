exports.part1 = (input) => {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const actual = input[i];
    const next = input[(i + 1) % input.length];

    if (actual === next) {
      sum += +actual;
    }
  }

  return sum;
};

exports.part2 = (input) => {
  const half = input.length / 2;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const actual = input[i];
    const next = input[(i + half) % input.length];

    if (actual === next) {
      sum += +actual;
    }
  }

  return sum;
};
