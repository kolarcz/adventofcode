import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run(`
H => HO
H => OH
O => HH

HOH
    `.trim()), 4);
  });

});
