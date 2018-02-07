const test = require('tape');
const { part1 } = require('./solution');

test('day17', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('3'), 638);
    t.end();
  });

  t.test('part2', (t) => {
    t.end();
  });
});
