import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('qjhvhtzxzqqjkmpb'), 1);
  });

  it('example 2', () => {
    assert.equal(script.run('xxyxx'), 1);
  });

  it('example 3', () => {
    assert.equal(script.run('uurcxstgmygtbstg'), 0);
  });

  it('example 4', () => {
    assert.equal(script.run('ieodomkazucvgmuy'), 0);
  });

});
