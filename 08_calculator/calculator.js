const add = function () {
  let sum = 0;
  let args = [...arguments];
  args.forEach((element) => {
    sum += element;
  });
  return sum;
};

const subtract = function () {
  let res = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    res -= arguments[i];
  }
  return res;
};

const sum = function (array) {
  return array.reduce((init, el) => init + el, 0);
};

const multiply = function (array) {
  return array.reduce((init, el) => init * el);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  let result = number;

  for (let i = 1; i < number; i++) {
    result = result * i;
  }
  return result;
  // recursive call:
  // return factorial(number - 1) * number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
