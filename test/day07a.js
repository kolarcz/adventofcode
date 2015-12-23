import path from 'path';
import assert from 'assert';

let script = require(`../days/${path.basename(__filename)}`);

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('123 -> b\n456 -> y\nb AND y -> d\nb OR y -> e\nb LSHIFT 2 -> a\ny RSHIFT 2 -> g\nNOT b -> h\nNOT y -> i'), 492);
  });

});
