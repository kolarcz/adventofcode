const test = require('tape');
const { part1, part2 } = require('./solution');

test('day04', t => {
  t.test('part1', t => {
    t.equal(part1('aa bb cc dd ee'), 1);
    t.equal(part1('aa bb cc dd aa'), 0);
    t.equal(part1('aa bb cc dd aaa'), 1);
    t.end();
  });

  t.test('part2', t => {
    t.equal(part2('abcde fghij'), 1);
    t.equal(part2('abcde xyz ecdab'), 0);
    t.equal(part2('a ab abc abd abf abj'), 1);
    t.equal(part2('iiii oiii ooii oooi oooo'), 1);
    t.equal(part2('oiii ioii iioi iiio'), 0);
    t.end();
  });
});
