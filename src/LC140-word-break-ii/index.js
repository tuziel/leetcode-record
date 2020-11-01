/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  var len = s.length;
  var stack = [];
  var result = [];
  var cache = new Array(len + 1);

  // 生成字典树
  var trie = {};
  for (var i = 0, l = wordDict.length; i < l; i++) {
    var word = wordDict[i];
    var node = trie;
    for (var j = 0, m = word.length; j < m; j++) {
      var char = word[j];
      node = node[char] || (node[char] = {});
    }
    // 标记单词结束
    node['$'] = true;
  }

  function backtrack(index) {
    // 该起点不存在任何单词组合
    if (cache[index] === false) return false;

    // 匹配到尽头
    if (index === len) {
      result.push(stack.join(' '));
      return cache[index] = true;
    }

    var flag = false;
    var char = s[index++];
    var node = trie[char];
    if (!node) return cache[index] = false;

    var word = [char];
    while (node) {
      if (node['$']) {
        stack.push(word.join(''));
        if (backtrack(index)) flag = true;
        stack.pop();
      }
      char = s[index++];
      node = node[char];
      word.push(char);
    }

    return cache[index] = flag;
  }

  backtrack(0);
  return result;
};

module.exports = wordBreak;
