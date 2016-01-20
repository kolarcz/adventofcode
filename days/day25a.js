export function run(data) {
  let m = data.match(/row ([0-9]+), column ([0-9]+)/);
  let row = m[1];
  let col = m[2];

  let x = 1, y = 1;
  let actualNumber = 20151125;

  do {
    x++, y--;

    if (!y) {
      y = x;
      x = 1;
    }

    actualNumber = actualNumber * 252533 % 33554393;
  } while (row != y || col != x);

  return actualNumber;
};
