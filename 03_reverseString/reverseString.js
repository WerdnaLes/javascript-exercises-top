const reverseString = function (str) {
  //   let res = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     res += str.charAt(i);
  //   }
  //   return res;

  // OR better:
  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
