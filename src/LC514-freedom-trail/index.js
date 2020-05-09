/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  var ringLen = ring.length;
  var ringHalf = ringLen >> 1;
  var keyLen = key.length;
  // 记录每个 ring 字符的位置
  var map = {};
  // 记录到当前字符位置的总共经过的最短距离
  var dp = new Array(ringLen);
  var step = Infinity;

  var getMin = (x, y) => x <= y ? x : y;

  var getDistence = (curr, tar) =>
    (curr = curr > tar ? curr - tar : tar - curr) <= ringHalf
      ? curr : ringLen - curr;

  function each(arr, fn) {
    var c = arr.length;
    while (c--) fn(arr[c]);
  }

  var i = ringLen;
  while (i--) (map[ring[i]] || (map[ring[i]] = [])).push(i);

  var last, char, min;
  last = key[0];
  // 记录从 0 点到第一个 key 的距离
  each(map[last], (x) => dp[x] = getDistence(0, x) + 1);

  i = 1;
  while (i < keyLen) {
    char = key[i++];

    // 相同字符时最短距离为原地
    if (char === last) each(map[char], (j) => dp[j]++);

    // 遍历每个符合的 char 位置
    else each(map[char], (j) => {
      min = Infinity;
      // 计算上个字符每个位置到该位置的最短距离
      each(map[last], (k) => min = getMin(min, dp[k] + getDistence(j, k)));
      dp[j] = min + 1;
    });

    last = char;
  }

  each(map[last], (x) => step = getMin(step, dp[x]));

  return step;
};

module.exports = findRotateSteps;
