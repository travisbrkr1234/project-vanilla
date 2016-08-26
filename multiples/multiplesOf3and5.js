function findSumOfMultiples(range) {
  var total = 0;

  for (var number = 0; number < range; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      total +=number;
    }
  }

  return total;
}

console.log('total of sums: ' + findSumOfMultiples(1000));
