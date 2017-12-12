const test = require('tape');
const { part1, part2 } = require('./solution');

test('day12', t => {
  t.test('part1', t => {
    t.equal(part1(
      '0 <-> 2\n' +
      '1 <-> 1\n' +
      '2 <-> 0, 3, 4\n' +
      '3 <-> 2, 4\n' +
      '4 <-> 2, 3, 6\n' +
      '5 <-> 6\n' +
      '6 <-> 4, 5'
    ), 6);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2(
      '0 <-> 2\n' +
      '1 <-> 1\n' +
      '2 <-> 0, 3, 4\n' +
      '3 <-> 2, 4\n' +
      '4 <-> 2, 3, 6\n' +
      '5 <-> 6\n' +
      '6 <-> 4, 5'
    ), 2);
    t.end();
  });
});
