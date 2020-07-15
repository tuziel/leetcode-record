/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  var len = croakOfFrogs.length;
  // 不可能少于 5 个字符
  if (len < 5) return -1;

  // 记录字符数量
  var record = new Array(5).fill(0);
  // 映射
  var chars = { c: 0, r: 1, o: 2, a: 3, k: 4 };
  var res = 0;

  var i, j;
  for (i = 0; i < len; i++) {
    // 当前字符下标
    j = chars[croakOfFrogs[i]];

    // 当前字符数量会超过上一个字符数量，不是有效字符
    if (j > 0 && record[j - 1] <= record[j]) return -1;

    // 如果是字符 k, 与 c 的差值就是需要的青蛙数
    if (j === chars.k) res = Math.max(res, record[chars.c] - record[chars.k]);

    // 字符数 + 1
    record[j]++;
  }

  // 各个字符的数量一定大于等于下一个字符的数量
  // 因此只需要比较头尾两个字符
  return record[chars.c] === record[chars.k] ? res : -1;
};

module.exports = minNumberOfFrogs;
