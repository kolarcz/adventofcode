import Combinatorics from 'js-combinatorics';

export function run(data) {
  let numbers = data.split(/[\r\n]+/).filter(r => r.length).map(r => parseInt(r, 10));
  let groupSize = numbers.reduce((a, b) => a + b) / 3;

  let min = undefined;

  for (let i=0; i<numbers.length; i++) {
    Combinatorics.combination(numbers, i).forEach(combination => {
      let sum = combination.reduce((a, b) => a + b);
      if (sum == groupSize) {
        let multiply = combination.reduce((a, b) => a * b);
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
