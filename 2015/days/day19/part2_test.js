import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run(`
e => H
e => O
H => HO
H => OH
O => HH

HOH
    `.trim()), 3);
  });

  it('example 2', () => {
    assert.equal(script.run(`
e => H
e => O
H => HO
H => OH
O => HH

HOHOHO
    `.trim()), 6);
  });

});
