const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }

  let fibonacciArray = [];
  let current;
  for (let i = 0; i < number; i++) {
    if (i > 1) {
      current = fibonacciArray[i - 2] + fibonacciArray[i - 1];
      fibonacciArray.push(current);
    } else {
      current = 1;
      fibonacciArray.push(current);
    }
  }
  return fibonacciArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
