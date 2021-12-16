/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const trie = [];

  for (const word of wordDict) {
    let node = trie;
    for (const char of word) {
      const code = char.charCodeAt();
      node = node[code] || (node[code] = []);
      node.char = char;
    }
    node[0] = 1;
  }

  const len = s.length;
  const cache = new Array(len).fill().map(() => []);
  for (let i = 0; i < len; i++) {
    let node = trie;
    for (let j = i; j < len; j++) {
      let code = s[j].charCodeAt();
      if (!node[code]) break;
      node = node[code];
      if (node[0]) cache[i].push(j + 1);
    }
  }

  const dp = new Array(len + 1).fill(false);
  dp[len] = true;

  for (let i = len; i--;) {
    dp[i] = cache[i].some((next) => dp[next]);
  }

  return dp[0];
};

module.exports = wordBreak;
