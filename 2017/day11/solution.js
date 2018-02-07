function getDistance(x, y) {
  const absX = Math.abs(x);
  const absY = Math.abs(y);
  const steps = absX + Math.max(absY - (absX / 2), 0);
  return steps;
}

function computeSteps(input) {
  let x = 0;
  let y = 0;
  let max = 0;
  let last = 0;

  const moves = input.split(',');
  moves.forEach((move) => {
    switch (move) {
      case 'n': y--; break;
      case 's': y++; break;
      case 'nw': y -= 0.5; x--; break;
      case 'ne': y -= 0.5; x++; break;
      case 'sw': y += 0.5; x--; break;
      case 'se': y += 0.5; x++; break;
    }

    last = getDistance(x, y);
    if (max < last) max = last;
  });

  return { last, max };
}

exports.part1 = (input) => {
  const { last } = computeSteps(input);
  return last;
};

exports.part2 = (input) => {
  const { max } = computeSteps(input);
  return max;
};
