import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('""'), 4);
  });

  it('example 2', () => {
    assert.equal(script.run('"abc"'), 4);
  });

  it('example 3', () => {
    assert.equal(script.run('"aaa\\"aaa"'), 6);
  });

  it('example 4', () => {
    assert.equal(script.run('"\\x27"'), 5);
  });

});