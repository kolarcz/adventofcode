import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('turn on 0,0 through 999,999'), 1000000);
  });
  
  it('example 2', () => {
    assert.equal(script.run('turn on 123,0 through 123,0\ntoggle 0,0 through 999,0'), 999);
  });
  
  it('example 3', () => {
    assert.equal(script.run('turn on 0,0 through 999,999\nturn off 499,499 through 500,500'), 999996);
  });
  
});
