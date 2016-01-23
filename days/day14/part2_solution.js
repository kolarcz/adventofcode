function getLength(reindeerDescription, seconds) {
  let m = reindeerDescription.match(/[a-z]+ can fly ([0-9]+) km\/s for ([0-9]+) seconds?, but then must rest for ([0-9]+) seconds?\./i);
  let reindeer = {
    speed: parseInt(m[1], 10),
    timeRun: parseInt(m[2], 10),
    timeRest: parseInt(m[3], 10)
  };

  let timeSum = reindeer.timeRun + reindeer.timeRest;
  let timeRunSum = (Math.floor(seconds / timeSum) * reindeer.timeRun + Math.min(reindeer.timeRun, seconds % timeSum)) * reindeer.speed;

  return timeRunSum;
}

export function run(data, seconds = 2503) {
  let lines = data.split(/[\r\n]+/).filter(r => r.length);
  let reindeers = [];

  lines.forEach((line) => {
    reindeers.push({
      description: line,
      actualLength: undefined,
      score: 0
    });
  });

  for (let i=1; i<=seconds; i++) {
    for (let j=0; j<reindeers.length; j++) {
      reindeers[j].actualLength = getLength(reindeers[j].description, i);
    }

    let maxLength = Math.max.apply(null, reindeers.map(r => r.actualLength));

    for (let j=0; j<reindeers.length; j++) {
      if (reindeers[j].actualLength == maxLength) {
        reindeers[j].score++;
      }
    }
  }

  return Math.max.apply(null, reindeers.map(r => r.score));
};
