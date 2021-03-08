/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  var keys = words.map((word) => {
    var key = 0;
    for (var char of word) {
      key |= 1 << (char.charCodeAt() - 97);
    }
    return key;
  });

  var max = 0;
  for (var i = 0; i < words.length; i++) {
    for (var j = i + 1; j < words.length; j++) {
      if (keys[i] & keys[j]) continue;
      max = Math.max(max, words[i].length * words[j].length);
    }
  }
  return max;
};

module.exports = maxProduct;
