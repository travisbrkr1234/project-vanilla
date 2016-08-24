function generatePrimes(numberToGenerate) { //create function that accepts a number of primes generate
	var primes = []; //create an array to store the prime numbers in
	var currentNumber = 2; //initialize current number at 2 because 1 is not a prime number
	var limit = Number.MAX_SAFE_INTEGER; // Kind of safe? is there something better you would recommend?
	var pattern = /[0-9]+/;

	try {
		if (numberToGenerate <= 0 || typeof numberToGenerate !== 'number' || !pattern.test(numberToGenerate)) throw exception; //isNaN(numberToGenerate) applicable?
		else { //run the program
			while (primes.length < numberToGenerate && currentNumber < limit) { //check to see if the number to generate has been met and if the current number is under the limit set
				for (var i = 2; i <= limit; i++) { //starting at 2, increment by 1 until the limit is hit
					if ((currentNumber % i === 0) && (currentNumber !== i)) { //if the current number mod i has no remainder and current number is not i
						break;
					} else if((currentNumber % i === 0) && (currentNumber === i)) { //but if the current number mod i has no remainder and the current number is i
						primes.push(currentNumber); //add the number to the primes array
						break;
					}
				}
				currentNumber++; //increment number to escape while loop
			}
			// console.log(primes); //check output in console
			return primes; //return the array of prime numbers
		}

	} catch (exception) {
		console.log('please pick a positive number 1 to 100'); //setup some other type of logging? not sure if this is correct...
	}
}

// generatePrimes(100); // get the first x number of primes
generatePrimes(0); //test case 1
// generatePrimes('a'); //test case 2
// generatePrimes(a); //test case 3 //Not sure how to test against this
