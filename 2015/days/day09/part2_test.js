import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141'), 982);
  });

});
