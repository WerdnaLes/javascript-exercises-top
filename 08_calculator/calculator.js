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

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
