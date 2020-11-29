/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  var reg = new RegExp(`(${word})+`, 'g');
  var matcher = sequence.match(reg);
  if (!matcher) return 0;

  var len = word.length;
  var max = 0;
  matcher.forEach((word) => {
    if (word.length > max) max = word.length;
  });

  return max / len;
};

module.exports = maxRepeating;
