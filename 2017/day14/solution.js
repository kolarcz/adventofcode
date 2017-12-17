const { getHash } = require('../day10/solution');

function markGroup(grid, x, y) {
  grid[y][x] = '2';

  const map = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  map.map(([xd, yd]) => [x + xd, y + yd]).forEach(([xn, yn]) => {
    if (grid[yn] && grid[yn][xn] === '1') {
      markGroup(grid, xn, yn);
    }
  });
}

exports.part1 = input => {
  let sum = 0;

  for (let i = 0; i < 128; i++) {
    const hash = getHash(`${input}-${i}`);
    sum += [...hash].reduce((rowSum, ch) =>
      rowSum + parseInt(ch, 16).toString(2).replace(/0/g, '').length,
    0);
  }

  return sum;
};

exports.part2 = input => {
  let groups = 0;
  const grid = [];

  for (let i = 0; i < 128; i++) {
    const hash = getHash(`${input}-${i}`);
    const row = [...hash].reduce((arr, ch) =>
      [...arr, ...(`000${parseInt(ch, 16).toString(2)}`).slice(-4)],
    []);
    grid.push(row);
  }

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === '1') {
        markGroup(grid, x, y);
        groups++;
      }
    });
  });

  return groups;
};
