import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('[1,2,3]'), 6);
  });

  it('example 2', () => {
    assert.equal(script.run('{"a":2,"b":4}'), 6);
  });

  it('example 3', () => {
    assert.equal(script.run('[[[3]]]'), 3);
  });

  it('example 4', () => {
    assert.equal(script.run('{"a":{"b":4},"c":-1}'), 3);
  });

  it('example 5', () => {
    assert.equal(script.run('{"a":[-1,1]}'), 0);
  });

  it('example 6', () => {
    assert.equal(script.run('[-1,{"a":1}]'), 0);
  });

  it('example 7', () => {
    assert.equal(script.run('[]'), 0);
  });

  it('example 8', () => {
    assert.equal(script.run('{}'), 0);
  });

});
