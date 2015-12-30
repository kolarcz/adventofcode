import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

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
