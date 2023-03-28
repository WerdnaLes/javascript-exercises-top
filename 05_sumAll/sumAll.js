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

  let sum = first;
  const length = second - first;

  for (let i = 0; i < length; i++) {
    sum += ++first;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
