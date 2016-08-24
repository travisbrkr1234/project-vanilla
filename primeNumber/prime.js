function generatePrimes(numberToGenerate) { //create function that accepts a number of primes generate
	var primes = []; //create an array to store the prime numbers in
	var currentNumber = 2; //initialize current number at 2 because 1 is not a prime number
	var limit = 550; //not sure the better solution? because first 100 primes ends at 541

	if (numberToGenerate <= 0) { //if the user decides to enter 0 or a negative number
		alert('please pick a positive number 1 to 100'); //tell them to enter a valid range
	} else { //run the program
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
		return primes; //return the array of prime numbers
	}
}

generatePrimes(100); // get the first x number of primes
