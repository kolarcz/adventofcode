const test = require('tape');
const { part1, part2 } = require('./solution');

test('day08', (t) => {
  t.test('part1', (t) => {
    t.equal(part1(
      'b inc 5 if a > 1\n' +
      'a inc 1 if b < 5\n' +
      'c dec -10 if a >= 1\n' +
      'c inc -20 if c == 10'
    ), 1);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2(
      'b inc 5 if a > 1\n' +
      'a inc 1 if b < 5\n' +
      'c dec -10 if a >= 1\n' +
      'c inc -20 if c == 10'
    ), 10);
    t.end();
  });
});
