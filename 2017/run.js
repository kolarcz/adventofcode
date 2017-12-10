const fs = require('fs');

const dirOfTheDay = process.argv[2] === 'test' ? undefined : process.argv[2];
const runTests = process.argv[2] === 'test' || process.argv[3] === 'test';

function runDayTest(dir) {
  require(`${__dirname}/${dir}/test.js`);
}

function runDay(dir) {
  const { part1, part2 } = require(`${__dirname}/${dir}/solution.js`);
  const input = fs.readFileSync(`${__dirname}/${dir}/input.txt`, 'utf8').trim();

  console.info('#', dir);
  console.info('part1:', part1(input));
  console.info('part2:', part2(input));
}

const dirs = dirOfTheDay
  ? [dirOfTheDay]
  : fs.readdirSync('.').filter(d => /^day\d+$/.test(d));

dirs.forEach(dir => (
  runTests
    ? runDayTest(dir)
    : runDay(dir)
));
