/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  var list = sentence.split(' ');
  for (var i = 0; i < list.length; i++) {
    if (list[i].indexOf(searchWord) === 0) return i + 1;
  }
  return -1;
};

module.exports = isPrefixOfWord;
