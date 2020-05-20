/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var len = s.length;
  if (len <= 1) return s;

  var cahce = [];
  var max = 0;
  var i, j, curr, currLen, record;

  for (i = 1; i <= len; i++) {
    // 检查现存回文串是否能延续
    j = cahce.length;
    while (j--) {
      curr = cahce[j];
      if (s[i] !== s[curr[0] - 1]) {
        // 不是回文串，计算该串长度是否比记录值大
        currLen = (curr[1] - curr[0] + 1 << 1) + curr[2];
        if (currLen > max) {
          max = currLen;
          record = curr;
        }
        cahce.splice(j, 1);
      } else {
        // 还是回文串，开始位置-1
        curr[0]--;
      }
    }

    // 添加回文串
    // [开始位置, 中间位置, 偶回文]
    if (s[i] === s[i - 1]) cahce.push([i - 1, i - 1, 0]);
    // [开始位置, 中间位置-1, 奇回文]
    if (s[i] === s[i - 2]) cahce.push([i - 2, i - 2, 1]);
  }

  // 还有未处理的记录，即为原字符串
  if (cahce.length) return s;

  // 没有记录即没有长度大于 1 的回文串
  if (!record) return s[0];

  // 构成字符串
  i = record[0];
  while (i <= record[1]) cahce.push(s[i++]);
  if (record[2]) cahce.push(s[i]);
  while (--i >= record[0]) cahce.push(s[i]);

  return cahce.join('');
};

module.exports = longestPalindrome;
