const test = require('tape');
const { part1, part2 } = require('./solution');

test('day10', (t) => {
  t.test('part1', (t) => {
    t.equal(part1('3, 4, 1, 5', 5), 12);
    t.end();
  });

  t.test('part2', (t) => {
    t.equal(part2(''), 'a2582a3a0e66e6e86e3812dcb672a272');
    t.equal(part2('AoC 2017'), '33efeb34ea91902bb2f59c9920caa6cd');
    t.equal(part2('1,2,3'), '3efbe78a8d82f29979031a4aa0b16a9d');
    t.equal(part2('1,2,4'), '63960835bcdc130f0b66d7ff4f6a5a8e');
    t.end();
  });
});
