import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('To continue, please consult the code grid in the manual.  Enter the code at row 4, column 3.'), 21345942);
  });

});
