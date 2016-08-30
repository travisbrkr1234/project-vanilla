var chai = require('chai');
var expect = require('chai').expect;
var testMultiplesOf3and5 = require('../multiples/multiplesOf3and5.js');

describe('Multiples of 3 and 5', function() {
    it('returns sum of numbers divisible by 3 or 5 under a given range', function() {
        var range = 1000;
        var sumOfMultiples = testMultiplesOf3and5.generateMultiples(range);

        expect(sumOfMultiples).to.deep.equal(233168);
    });
});
