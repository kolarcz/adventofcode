import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run(`
inc a
jio a, +2
tpl a
inc a
    `.trim(), 'a'), 2);
  });

});
