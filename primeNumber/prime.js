function listPrimes(number) { // create function that accepts a number of primes to count to
	var primes = []; // create an array to store the prime numbers in

	for (var i = 0; i <= number; i++) { 

		primes.push(i);
		console.log('pushed: ' + i);

		if (i === 1) {
			primes.pop(i);  //remove 1 because it is not considered prime
		}

		if (i % 2 === 0) { //is this number divisible by 2 evenly?
			if (i !== 2) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		} else if (i % 3 === 0) { //is this number divisible by 3 evenly?
			if (i !== 3) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		} else if (i % 4 === 0) { //is this number divisible by 4 evenly?
			if (i !== 4) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		} else if (i % 5 === 0) { //is this number divisible by 5 evenly?
			if (i !== 5) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		} else if (i % 6 === 0) { //is this number divisible by 6 evenly?
			if (i !== 6) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		} else if (i % 7 === 0) { //is this number divisible by 7 evenly?
			if (i !== 7) {
				primes.pop(i);
				console.log('popped: ' + i);
			}
		}
	}
	return primes;

}

listPrimes(100); // get the first x prime numbers between 0-100