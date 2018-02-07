const test = require('tape');
const { part1, part2 } = require('./solution');

test('day05', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('0\n3\n0\n1\n-3'), 5);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2('0\n3\n0\n1\n-3'), 10);
    t.end();
  });
});
