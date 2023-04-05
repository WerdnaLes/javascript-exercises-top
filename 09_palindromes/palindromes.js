const palindromes = function (string) {
  let alphanumericOnly = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedString = alphanumericOnly.split("").reverse().join("");

  return reversedString === alphanumericOnly;
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
