/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = {
    'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10,
    'XL': 40, 'L': 50, 'XC': 90, 'C': 100,
    'CD': 400, 'D': 500, 'CM': 900, 'M': 1000,
  };
  var matcher = s.match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g);

  return matcher ? matcher.reduce((total, key) => total += map[key], 0) : 0;
};

module.exports = romanToInt;
