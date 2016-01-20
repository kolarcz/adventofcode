import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('1\n2\n3\n4\n5\n7\n8\n9\n10\n11\n'), 44);
  });

});
