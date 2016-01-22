import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('(())'), 0);
    assert.equal(script.run('()()'), 0);
  });

  it('example 2', () => {
    assert.equal(script.run('((('), 3);
    assert.equal(script.run('(()(()('), 3);
  });

  it('example 3', () => {
    assert.equal(script.run('))((((('), 3);
  });

  it('example 4', () => {
    assert.equal(script.run('())'), -1);
    assert.equal(script.run('))('), -1);
  });

  it('example 5', () => {
    assert.equal(script.run(')))'), -3);
    assert.equal(script.run(')())())'), -3);
  });

});
