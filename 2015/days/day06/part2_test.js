import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('turn on 0,0 through 0,0'), 1);
  });

  it('example 2', () => {
    assert.equal(script.run('toggle 0,0 through 999,999'), 2000000);
  });

});
