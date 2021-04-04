/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  var freq = [];
  for (var n of answers) freq[n + 1] = -~freq[n + 1];
  return Object.entries(freq).reduce((res, [n, m]) => res + Math.ceil(m / n) * n, 0);
};

module.exports = numRabbits;
