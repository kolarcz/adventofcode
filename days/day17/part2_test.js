import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('20\n15\n10\n5\n5', 25), 3);
  });

});
