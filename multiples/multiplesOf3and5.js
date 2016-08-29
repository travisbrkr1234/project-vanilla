exports.generateMultiples = function(range) {
  var total = 0;

  for (var number = 0; number < range; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      total +=number;
    }
  }

  return total;
}