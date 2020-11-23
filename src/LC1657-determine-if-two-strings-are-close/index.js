/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  var map1 = new Array(26);
  var map2 = new Array(26);

  [].forEach.call(word1, (char) => ((code) => map1[code] = -~map1[code])(char.charCodeAt() - 97));
  [].forEach.call(word2, (char) => ((code) => map2[code] = -~map2[code])(char.charCodeAt() - 97));

  for (var i = 0; i < 26; i++) {
    if (!map1[i] !== !map2[i]) return false;
  }

  map1.sort();
  map2.sort();

  for (i = 0; i < 26; i++) {
    if (map1[i] !== map2[i]) return false;
  }

  return true;
};

module.exports = closeStrings;
