const test = require('tape');
const { part1, part2 } = require('./solution');

test('day01', t => {
  t.test('part1', t => {
    t.equal(part1('1122'), 3);
    t.equal(part1('1111'), 4);
    t.equal(part1('1234'), 0);
    t.equal(part1('91212129'), 9);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('1212'), 6);
    t.equal(part2('1221'), 0);
    t.equal(part2('123425'), 4);
    t.equal(part2('123123'), 12);
    t.equal(part2('12131415'), 4);
    t.end();
  });
});
