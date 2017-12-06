import Combinatorics from 'js-combinatorics';

export function run(data) {
  const numbers = data.split(/[\r\n]+/).filter(r => r.length).map(r => parseInt(r, 10));
  const groups = 3;
  const groupSize = numbers.reduce((a, b) => a + b) / groups;

  let min = undefined;

  for (let i=0; i<numbers.length; i++) {
    Combinatorics.combination(numbers, i).forEach(combination => {
      const sum = combination.reduce((a, b) => a + b);
      if (sum == groupSize) {
        const multiply = combination.reduce((a, b) => a * b);
        if (min === undefined || min > multiply) {
          min = multiply;
        }
      }
    });

    if (min !== undefined) {
      break;
    }
  }

  return min;
};
