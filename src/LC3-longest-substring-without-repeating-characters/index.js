/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = s.length;
  if (len <= 1) return len;
  var indexes = {};
  var max = 1;
  var left, right;

  for (left = right = 0; right < len; right++) {
    var index = indexes[s[right]];
    // 遇到相同的字符
    if (index !== undefined) {
      // 更新距离
      max = Math.max(max, right - left);
      // 去掉重复字符
      if (index >= left) left = index + 1;
    }
    indexes[s[right]] = right;
  }

  return Math.max(max, right - left);
};

module.exports = lengthOfLongestSubstring;
