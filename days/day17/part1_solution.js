import { power } from 'js-combinatorics';

export function run(data, size = 150) {
  const numbers = data.split(/[\r\n]+/).filter(r => r.length).map(n => parseInt(n, 10));
  let sum = 0;

  power(numbers).forEach(variant => {
    const tmp = variant.length ? variant.reduce((a, b) => a + b) : 0;
    if (tmp == size) { sum++; }
  });

  return sum;
};
