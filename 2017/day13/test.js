const test = require('tape');
const { part1, part2 } = require('./solution');

test('day13', (t) => {
  t.test('part1', (t) => {
    t.equal(part1(
      '0: 3\n' +
      '1: 2\n' +
      '4: 4\n' +
      '6: 4'
    ), 24);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2(
      '0: 3\n' +
      '1: 2\n' +
      '4: 4\n' +
      '6: 4'
    ), 10);
    t.end();
  });
});
