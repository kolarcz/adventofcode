const test = require('tape');
const { part1, part2 } = require('./solution');

test('day14', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('flqrgnkx'), 8108);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2('flqrgnkx'), 1242);
    t.end();
  });
});
