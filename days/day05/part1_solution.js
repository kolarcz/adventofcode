export function run(data) {
  let words = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  words.forEach((word) => {
    if (word.replace(/[aeiou]/g, '').length + 3 > word.length) {
      return;
    } else if (word.replace(/([a-z])\1/g, '').length == word.length) {
      return;
    } else if (word.match(/(ab|cd|pq|xy)/)) {
      return;
    } else {
      sum++;
    }
  });

  return sum;
};
