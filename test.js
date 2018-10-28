var assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/func_1.js');
const make = require('./src/func_2.js');
function sum(a, b) {
  return a + b;
}
describe('Sum', () => {
    it('0', () => { 
      assert.deepEqual( sumOfOther([2, 3, 4, 1]),[8, 7, 6, 9]);
    });
});


describe('makesum', () => {
    it('1', () => { 
      assert.equal( make(15)(34, 21, 666)(41)(sum),777);
    });
});