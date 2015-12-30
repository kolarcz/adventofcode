import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('abcdefgh'), 'abcdffbb');
  });

  it('example 2', () => {
    assert.equal(script.run('ghijklmn'), 'ghjbbcdd');
  });

});
