exports.part1 = input => {
  let sum = 0;

  const rows = input.split(/[\r\n]+/);
  rows.forEach(row => {
    const words = row.split(/\s/);
    const uniqueWords = new Set(words);

    if (words.length === uniqueWords.size) {
      sum++;
    }
  });

  return sum;
};

exports.part2 = input => {
  let sum = 0;

  const sort = words =>
    words.map(word => word.split('').sort().join(''));

  const rows = input.split(/[\r\n]+/);
  rows.forEach(row => {
    const words = sort(row.split(/\s/));
    const uniqueWords = new Set(words);

    if (words.length === uniqueWords.size) {
      sum++;
    }
  });

  return sum;
};
