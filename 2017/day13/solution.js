function getLayers(input) {
  const layers = input.split(/[\r\n]+/).map((row) => {
    const match = row.match(/^(\d+): (\d+)$/);
    const index = Number(match[1]);
    const range = Number(match[2]);
    return [index, range];
  });

  return new Map(layers);
}

exports.part1 = (input) => {
  let score = 0;
  const layers = getLayers(input);

  layers.forEach((range, index) => {
    if (index % ((range * 2) - 2) === 0) {
      score += index * range;
    }
  });

  return score;
};

exports.part2 = (input) => {
  let delay = 0;
  const layers = getLayers(input);
  const indexes = [...layers.keys()];

  const isSeen = (index) => {
    const range = layers.get(index);
    return ((index + delay) % ((range * 2) - 2) === 0);
  };

  for (;;delay++) {
    const whereSeen = indexes.find(isSeen);
    if (whereSeen === undefined) break;
  }

  return delay;
};
