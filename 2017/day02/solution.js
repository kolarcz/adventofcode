exports.part1 = input => {
  let sum = 0;

  const rows = input.split(/[\r\n]+/);
  rows.forEach(row => {
    const cols = row.split(/\s/);
    const min = Math.min(...cols);
    const max = Math.max(...cols);
    sum += max - min;
  });

  return sum;
};

exports.part2 = input => {
  let sum = 0;

  const rows = input.split(/[\r\n]+/);
  rows.forEach(row => {
    const cols = row.split(/\s/).map(Number);

    for (let i = 0; i < cols.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        if (i !== j && cols[i] % cols[j] === 0) {
          sum += cols[i] / cols[j];
          return;
        }
      }
    }
  });

  return sum;
};
