import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('ugknbfddgicrmopn'), 1);
  });

  it('example 2', () => {
    assert.equal(script.run('aaa'), 1);
  });

  it('example 3', () => {
    assert.equal(script.run('jchzalrnumimnmhp'), 0);
  });

  it('example 4', () => {
    assert.equal(script.run('haegwjzuvuyypxyu'), 0);
  });

  it('example 5', () => {
    assert.equal(script.run('dvszwmarrgswjxmb'), 0);
  });

});
