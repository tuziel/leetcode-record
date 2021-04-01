/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  var begin = wordList.length;
  var end = wordList.indexOf(endWord);
  if (end === -1) return [];

  wordList.push(beginWord);
  var graph = createGraph2(createGraph(wordList), begin, end);
  if (!graph) return [];

  var min = Infinity;
  var result = [];
  var path = [begin];
  var visited = new Set([begin]);

  function dfs(node) {
    if (path.length > min) return;
    if (node === end) {
      if (path.length < min) {
        min = path.length;
        result = [];
      }
      result.push(path.map((i) => wordList[i]));
      return;
    }

    if (!graph[node]) return;
    for (var next of graph[node]) {
      if (visited.has(next)) continue;
      visited.add(next);
      path.push(next);

      dfs(next);

      path.pop();
      visited.delete(next);
    }
  }

  dfs(begin);
  return result;
};

/** 单词是否能进行转换 */
function canTransform(str1, str2) {
  var count = 0;
  for (var i = str1.length; i--;) {
    if (str1[i] !== str2[i]) {
      if (++count > 1) return false;
    }
  }
  return count === 1;
}

/** 从单词中构建双向图 */
function createGraph(wordList) {
  var wordsLen = wordList.length;
  var graph = new Array(wordsLen).fill().map(() => []);
  var i, j, m, n;

  for (i = 0; i < wordsLen; i++) {
    m = wordList[i];
    for (j = i + 1; j < wordsLen; j++) {
      n = wordList[j];
      if (canTransform(m, n)) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  return graph;
}

/** 构建从起点到终点的单向图 */
function createGraph2(graph, begin, end) {
  var graph2 = new Array(begin + 1).fill().map(() => []);
  var queue = [end];

  var visited = new Set();
  while (queue.length) {
    queue.forEach((n) => visited.add(n));
    var temp = [];
    var set = new Set();
    for (var node of queue) {
      for (var prev of graph[node]) {
        if (visited.has(prev)) continue;
        graph2[prev].push(node);
        if (set.has(prev)) continue;
        set.add(prev);
        temp.push(prev);
      }
    }
    queue = temp;
  }

  return visited.has(begin) ? graph2 : null;
}

module.exports = findLadders;
