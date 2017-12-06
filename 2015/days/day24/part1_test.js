import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('1\n2\n3\n4\n5\n7\n8\n9\n10\n11\n'), 99);
  });

});
