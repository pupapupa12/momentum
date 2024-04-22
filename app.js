const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, addResult);
const squareResult = calculator.square(divideResult, minusResult);

console.log(addResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(squareResult);
