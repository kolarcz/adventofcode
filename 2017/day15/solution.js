const MAX = 2147483647;
const FACTOR_A = 16807;
const FACTOR_B = 48271;
const B16 = 0b1111111111111111;

function getGeneratorsStart(input) {
  const [, genA, genB] = input.match(/Generator A starts with (\d+)\nGenerator B starts with (\d+)/);
  return { genA, genB };
}

exports.part1 = input => {
  let matches = 0;
  let { genA, genB } = getGeneratorsStart(input);

  for (let i = 0; i < 40000000; i++) {
    genA = (genA * FACTOR_A) % MAX;
    genB = (genB * FACTOR_B) % MAX;

    const genA16b = genA & B16;
    const genB16b = genB & B16;

    if (genA16b === genB16b) {
      matches++;
    }
  }

  return matches;
};

exports.part2 = input => {
  let matches = 0;
  let { genA, genB } = getGeneratorsStart(input);

  for (let i = 0; i < 5000000; i++) {
    do { genA = (genA * FACTOR_A) % MAX; } while (genA % 4 !== 0);
    do { genB = (genB * FACTOR_B) % MAX; } while (genB % 8 !== 0);

    const genA16b = genA & B16;
    const genB16b = genB & B16;

    if (genA16b === genB16b) {
      matches++;
    }
  }

  return matches;
};
