import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.apply('1', 1), '11');
    assert.equal(script.run('1', 1), 2);
  });

  it('example 2', () => {
    assert.equal(script.apply('11', 1), '21');
    assert.equal(script.run('11', 1), 2);
  });

  it('example 3', () => {
    assert.equal(script.apply('21', 1), '1211');
    assert.equal(script.run('21', 1), 4);
  });

  it('example 4', () => {
    assert.equal(script.apply('1211', 1), '111221');
    assert.equal(script.run('1211', 1), 6);
  });

  it('example 5', () => {
    assert.equal(script.apply('111221', 1), '312211');
    assert.equal(script.run('111221', 1), 6);
  });

});
