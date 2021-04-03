/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var words = str.split(' ');
  var index = words.length;
  if (index !== pattern.length) return false;

  var p2wMap = new Map();
  var w2pMap = new Map();

  while (index--) {
    var key = pattern[index];
    var word = words[index];

    if (!p2wMap.has(key)) p2wMap.set(key, word);
    else if (p2wMap.get(key) !== word) return false;

    if (!w2pMap.has(word)) w2pMap.set(word, key);
    else if (w2pMap.get(word) !== key) return false;
  }

  return true;
};

module.exports = wordPattern;
