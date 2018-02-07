exports.part1 = (input) => {
  const number = Number(input);

  if (number <= 1) return 0;

  let max = 1;
  let depth = 0;

  while (max < number) {
    max += ++depth * 8;
  }

  const side = depth * 2;
  const sideSteps = Math.abs(((max - number) % side) - (side / 2));
  const steps = sideSteps + depth;

  return steps;
};

exports.part2 = (input) => {
  const number = Number(input);

  const numbers = {};
  let [x, y] = [0, 0];
  let [xd, yd] = [0, 0];
  let bigger = 0;
  let depth = 0;

  const neighboursSum = (x, y) =>
    [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]
      .reduce((sum, [a, b]) =>
        sum + (numbers[[x + a, y + b]] || 0),
      0);

  const moveToNext = () => {
    if (x === depth && y === depth) {
      xd = 0; yd = -1;
    } else if (x === depth && y === -depth) {
      xd = -1; yd = 0;
    } else if (x === -depth && y === -depth) {
      xd = 0; yd = 1;
    } else if (x === -depth && y === depth) {
      xd = 1; yd = 0;
    }

    if (x === depth && y === depth) {
      depth++;
      x++;
    } else {
      x += xd;
      y += yd;
    }
  };

  while (bigger <= number) {
    bigger = neighboursSum(x, y) || 1;
    numbers[[x, y]] = bigger;
    moveToNext();
  }

  return bigger;
};
