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
  let lengths = [];

  lines.forEach((line) => {
    lengths.push(getLength(line, seconds));
  });

  return Math.max.apply(null, lengths);
};
