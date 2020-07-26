/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var O = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var T = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var H = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var K = ['', 'M', 'MM', 'MMM'];
  return `${K[num / 1000 >> 0]}${H[(num % 1000) / 100 >> 0]}${T[(num % 100) / 10 >> 0]}${O[(num % 10) / 1 >> 0]}`;
};

module.exports = intToRoman;
