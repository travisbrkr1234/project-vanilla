function generatePrimes(numberToGenerate) {
  var primes = [];
  var currentNumber = 2;

  if ((numberToGenerate <= 0) || (Number.isSafeInteger(numberToGenerate) === false) ) {
    throw "please enter a positive number 1 to 100";
  }
  for (currentNumber; primes.length < numberToGenerate; currentNumber++) {
    for (var i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {
      if ((currentNumber % i === 0) && (currentNumber !== i)) {
        break;
      } else if((currentNumber % i === 0) && (currentNumber === i)) {
        primes.push(currentNumber);
        break;
      }
    }
  }
  return primes;
}

generatePrimes(15);
