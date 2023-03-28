const sumAll = function (first, second) {
  // Find incorrect input:
  if (
    typeof first !== "number" ||
    first < 0 ||
    typeof second !== "number" ||
    second < 0
  ) {
    return "ERROR";
  }

  // Find max:
  if (first > second) {
    const temp = second;
    second = first;
    first = temp;
  }

  let sum = 0;

  for (let i = first; i <= second; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
