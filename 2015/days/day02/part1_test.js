import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('2x3x4'), 58);
  });

  it('example 2', () => {
    assert.equal(script.run('1x1x10'), 43);
  });

});
