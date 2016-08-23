function generatePrimes(number) { // create function that accepts a number of primes to count to
	var primes = []; // create an array to store the prime numbers in
	// var realPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

	for (var i = 2; i <= number; i++) {
		if ((i % 2 === 0 && i != 2) || (i % 3 === 0 && i != 3) || (i % 5 === 0 && i != 5) || i % 6 === 0 || (i % 7 === 0 && i != 7)) {
			console.log('ignoring ' + i);
		} else {
			primes.push(i);
		}

	}
	console.log(primes);
}

generatePrimes(100); // get the first x prime numbers between 0-100
