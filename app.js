const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(1, 2);
const minusResult = calculator.minus(plusResult, 4);
const timesResult = calculator.times(minusResult, plusResult);
const squareResult = calculator.square(timesResult, 4);
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(squareResult);
