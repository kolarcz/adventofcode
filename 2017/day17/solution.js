exports.part1 = (input) => {
  const spin = Number(input);
  const arr = [0];
  let pos = 0;

  for (let i = 1; i <= 2017; i++) {
    pos = ((pos + spin) % arr.length) + 1;
    arr.splice(pos, 0, i);
  }

  const pos2017 = arr.indexOf(2017);
  return arr[pos2017 + 1];
};

exports.part2 = (input) => {
  const spin = Number(input);
  let number = 0;
  let pos = 0;

  for (let i = 1; i <= 50000000; i++) {
    pos = ((pos + spin) % i) + 1;
    if (pos === 1) number = i;
  }

  return number;
};
