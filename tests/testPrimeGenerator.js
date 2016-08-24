var chai = require('chai');
var expect = require('chai').expect;
var numberToGenerate = require('../primeNumber/prime.js');

describe('Generate Primes', function() {
  beforeEach(function() {
    console.log('Running Test: ');
  })
  it('returns first 10 prime numbers', function() {
    var outputArray = numberToGenerate.generatePrimes(10);

    expect(outputArray).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('returns an array', function() {
    var outputArray = numberToGenerate.generatePrimes(10);
    expect(outputArray).to.be.a('array');
  })
})
