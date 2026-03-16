const add = function (a, b) {
  //adds two numbers
  return a + b;

};

const subtract = function (a, b) {
  //substracts the second number from the first
  return a - b;
};

const sum = function (arr) {
  //sums up all arguments in the function

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;

};

const multiply = function (arr) {
  //multiply all the arguments in the function

  const total = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  return total;

};

const power = function (x, n) {
  const total = x ** n;
  return total;
};

const factorial = function (x) {

  if (x == 0) return 1;

  let total = 1;
  for (let i = x; i >= 1; i--) {
    total = total * i;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
