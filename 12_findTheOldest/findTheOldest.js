const findTheOldest = function (array) {
  const modifiedArray = array
    .map((element) => {
      if (!element.yearOfDeath) {
        element.yearOfDeath = new Date().getFullYear();
      }
      return element;
    })
    .sort((a, b) => {
      return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
        ? 1
        : -1;
    });

  return modifiedArray.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
