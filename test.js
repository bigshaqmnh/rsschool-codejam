var assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/func_1.js');
const make = require('./src/func_2.js');
const sum = (a, b) => a + b;

describe('Sum', () => {
    it('1', () => { 
      assert.deepEqual( sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
    it('2', () => { 
      assert.deepEqual( sumOfOther([7, 3, 6, 4, 8, 2]), [23, 27, 24, 26, 22, 28]);
    });
    it('3', () => { 
      assert.deepEqual( sumOfOther([36, 12, 78, 56, 98, 64]), [308, 332, 266, 288, 246, 280]);
    });
});


describe('makesum', () => {
    it('1', () => { 
      assert.equal( make(15)(34, 21, 666)(41)(sum),777);
    });
});