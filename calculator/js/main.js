 var calculator = document.querySelector('.calculator');
  var equals = document.querySelector('.equals');
  var clear = document.querySelector('.clear');

  var listOfNumbers = '';
  calculator.addEventListener('click', calculate, false);

  function calculate(e) {
    if(e.target !== e.currentTarget && e.target.value !== undefined && e.target.value !== '=' && e.target.value !== 'clear') {
      var number = e.target.value;
      // console.log(listOfNumbers += number);
      listOfNumbers += number;
      document.querySelector('.screen').innerHTML = listOfNumbers;
    }
  }

  equals.addEventListener('click', function() {
    listOfNumbers = eval(listOfNumbers);
    // console.log(eval(listOfNumbers));
    document.querySelector('.screen').innerHTML = listOfNumbers;
  });

  clear.addEventListener('click', function() {
    listOfNumbers = '';
    document.querySelector('.screen').innerHTML = '';
  });
