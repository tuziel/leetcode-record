/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (!sentence1 || !sentence2) return true;
  var words1 = sentence1.split(' ');
  var words2 = sentence2.split(' ');
  if (words1.length < words2.length) [words1, words2] = [words2, words1];

  var left = 0;
  var right1 = words1.length - 1;
  var right2 = words2.length - 1;

  for (; left <= right2; left++) {
    if (words1[left] !== words2[left]) break;
  }
  for (; right2 >= left; right2--) {
    if (words1[right1--] !== words2[right2]) break;
  }

  return left > right2;
};

module.exports = areSentencesSimilar;
