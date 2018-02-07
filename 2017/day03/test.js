const test = require('tape');
const { part1, part2 } = require('./solution');

test('day03', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('1'), 0);
    t.equal(part1('12'), 3);
    t.equal(part1('23'), 2);
    t.equal(part1('1024'), 31);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2('1'), 2);
    t.equal(part2('2'), 4);
    t.equal(part2('3'), 4);
    t.equal(part2('4'), 5);
    t.equal(part2('5'), 10);
    t.end();
  });
});
