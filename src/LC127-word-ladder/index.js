/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  wordList.push(beginWord);
  var len = wordList.length;
  var dic = {};
  var word, word2, i, j, temp;

  for (i = 0; i < len; i++) {
    word = wordList[i];
    if (word === endWord) temp = 1;
    for (j = i + 1; j < len; j++) {
      word2 = wordList[j];
      if (canChange(word, word2)) {
        (dic[word] || (dic[word] = [])).push(word2);
        (dic[word2] || (dic[word2] = [])).push(word);
      }
    }
  }
  if (!temp) return 0;

  var res = 0;
  var traversed = {};
  var queue = [beginWord];
  while ((len = queue.length)) {
    res++;
    while (len--) {
      word = queue.shift();
      if (traversed[word]) continue;
      traversed[word] = 1;
      if (word === endWord) return res;

      if (dic[word]) queue.push(...dic[word]);
    }
  }

  return 0;
};

function canChange(word1, word2) {
  if (word1 === word2) return false;
  var len = word1.length;
  if (word2.length !== len) return false;

  var count = 0;
  for (var i = 0; i < len; i++) {
    if (word1[i] !== word2[i]) count++;
    if (count > 1) return false;
  }

  return true;
}

module.exports = ladderLength;
