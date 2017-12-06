function getLength(reindeerDescription, seconds) {
  const m = reindeerDescription.match(/[a-z]+ can fly ([0-9]+) km\/s for ([0-9]+) seconds?, but then must rest for ([0-9]+) seconds?\./i);
  const reindeer = {
    speed: parseInt(m[1], 10),
    timeRun: parseInt(m[2], 10),
    timeRest: parseInt(m[3], 10)
  };

  const timeSum = reindeer.timeRun + reindeer.timeRest;
  const timeRunSum = (Math.floor(seconds / timeSum) * reindeer.timeRun + Math.min(reindeer.timeRun, seconds % timeSum)) * reindeer.speed;

  return timeRunSum;
}

export function run(data, seconds = 2503) {
  const lines = data.split(/[\r\n]+/).filter(r => r.length);
  let reindeers = [];

  lines.forEach((line) => {
    reindeers.push({
      description: line,
      actualLength: undefined,
      score: 0
    });
  });

  for (let i=1; i<=seconds; i++) {
    reindeers.forEach(reindeer => {
      reindeer.actualLength = getLength(reindeer.description, i);
    });

    const maxLength = Math.max.apply(null, reindeers.map(r => r.actualLength));

    reindeers.forEach(reindeer => {
      if (reindeer.actualLength == maxLength) {
        reindeer.score++;
      }
    });
  }

  return Math.max.apply(null, reindeers.map(r => r.score));
};
