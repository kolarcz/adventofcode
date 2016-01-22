import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/Test\.js$/, '.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('[1,2,3]'), 6);
  });

  it('example 2', () => {
    assert.equal(script.run('[1,{"c":"red","b":2},3]'), 4);
  });

  it('example 3', () => {
    assert.equal(script.run('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
  });

  it('example 4', () => {
    assert.equal(script.run('[1,"red",5]'), 6);
  });

});
