const test = require('tape');
const { part1, part2 } = require('./solution');

test('day16', t => {
  t.test('part1', t => {
    t.equal(part1('s1,x3/4,pe/b', 'abcde'), 'baedc');
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('s1,x3/4,pe/b', 'abcde', 2), 'ceadb');
    t.end();
  });
});
