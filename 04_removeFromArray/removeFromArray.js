const removeFromArray = function (array, ...num) {
  // Longer variant:
  //   let newArr = array;

  //   for (let i = 0; i < array.length; i++) {
  //     for (const rm of num) {
  //       if (array[i] === rm) {
  //         newArr.splice(i, 1);
  //         i--;
  //       }
  //     }
  //   }
  //   return newArr;

  // Much shorter variant
  return array.filter((val) => !num.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
