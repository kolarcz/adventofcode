import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run(`
##.#.#
...##.
#....#
..#...
#.#..#
####.#
    `.trim(), 5), 17);
  });

});
