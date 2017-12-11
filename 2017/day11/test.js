const test = require('tape');
const { part1 } = require('./solution');

test('day11', t => {
  t.test('part1', t => {
    t.equal(part1('ne,ne,ne'), 3);
    t.equal(part1('ne,ne,sw,sw'), 0);
    t.equal(part1('ne,ne,s,s'), 2);
    t.equal(part1('se,sw,se,sw,sw'), 3);
    t.end();
  });

  t.test('part2', t => {
    t.end();
  });
});
