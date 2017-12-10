const test = require('tape');
const { part1, part2 } = require('./solution');

test('day02', t => {
  t.test('part1', t => {
    t.equal(part1('5 1 9 5\n7 5 3\n2 4 6 8'), 18);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('5 9 2 8\n9 4 7 3\n3 8 6 5'), 9);
    t.end();
  });
});
