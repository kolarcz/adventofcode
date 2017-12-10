const test = require('tape');
const { part1, part2 } = require('./solution');

test('day06', t => {
  t.test('part1', t => {
    t.equal(part1('0 2 7 0'), 5);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('0 2 7 0'), 4);
    t.end();
  });
});
