const test = require('tape');
const { part1, part2 } = require('./solution');

test('day15', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('Generator A starts with 65\nGenerator B starts with 8921'), 588);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2('Generator A starts with 65\nGenerator B starts with 8921'), 309);
    t.end();
  });
});
