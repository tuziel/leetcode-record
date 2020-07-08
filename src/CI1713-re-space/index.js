/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  var len = sentence.length;
  if (!len) return 0;

  // 生成字典树
  const trie = {};
  for (let i = 0, l = dictionary.length; i < l; i++) {
    const word = dictionary[i];
    let node = trie;
    for (let j = 0, m = word.length; j < m; j++) {
      const char = word[j];
      node = node[char] || (node[char] = {});
    }
    // 标记单词结束
    node['$'] = true;
  }

  const cache = new Array(len).fill(Infinity);
  let res = Infinity;

  // DFS
  const stack = [0];
  const countStack = [0];
  while (stack.length) {
    // 当前单词匹配起点
    const index = stack.pop();
    // 当前未识别字符数
    const count = countStack.pop();
    // 从开头到前一个字符的子串，未识别字符数的最小值
    const n = cache[index];

    console.log(`已匹配子串 ${sentence.slice(0, index)}, 未识别字符数为 ${count}`);

    // 未识别字符数不小于当前最小值
    if (count >= n || count >= res) continue;

    // 已完成整个字符串的匹配
    if (index >= len) {
      console.log(`■■■■■ 匹配完成，未识别字符数为 ${count} ■■■■■`);
      if (count < res) res = count;
      continue;
    }

    // 进行单词匹配
    let i = index;
    let node = trie[sentence[i++]];

    // 如果匹配到一个字符的单词，选择该单词的分支为更优解，放弃未识别的分支
    if (!(node && node['$'])) {
      // 添加当前字符为未识别字符的分支
      stack.push(index + 1);
      countStack.push(count + 1);
    }

    // 寻找可识别的单词
    while (node) {
      // 成功识别到单词，添加分支
      if (node['$']) {
        console.log(`识别到单词 ${sentence.slice(index, i)}`);
        stack.push(i);
        countStack.push(count);
      }
      node = node[sentence[i++]];
    }

    if (count < n) cache[index] = count;
  }

  return res;
};

module.exports = respace;

// console.log(respace(['looked', 'just', 'like', 'her', 'brother'], 'jesslookedjustliketimherbrother'));

console.log(respace(
  JSON.parse('["frrrbbrrbfrfqqbbbrb","qr","b","rf","qqbbbbfrqbrrqrffbrqqqbqqfqfrr","r","ffqq","bffbqfqqbrrrf","fq","qfr","fr","rqrrbfbfq","r","f","qbqbrbrbqfqbbbfbbbfbq","bqqbbbqrbbrf","f"]'),
  'bqqffbqbbfqrfrrrbbrrbfrfqqbbbrbfqfffffrfqfqfffffrrfqfrrqbqfrbfrqqrfrbrbbqbqbqqfqrfbfrfr',
));
