const test = require('tape');
const { part1, part2 } = require('./solution');

test('day09', t => {
  t.test('part1', t => {
    t.equal(part1('{}'), 1);
    t.equal(part1('{{{}}}'), 6);
    t.equal(part1('{{},{}}'), 5);
    t.equal(part1('{{{},{},{{}}}}'), 16);
    t.equal(part1('{<a>,<a>,<a>,<a>}'), 1);
    t.equal(part1('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 9);
    t.equal(part1('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 9);
    t.equal(part1('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 3);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('{<>}'), 0);
    t.equal(part2('{<random characters>}'), 17);
    t.equal(part2('{<<<<>}'), 3);
    t.equal(part2('{<{!>}>}'), 2);
    t.equal(part2('{<!!>}'), 0);
    t.equal(part2('{<!!!>>}'), 0);
    t.equal(part2('{<{o"i!a,<{i<a>}'), 10);
    t.end();
  });
});
