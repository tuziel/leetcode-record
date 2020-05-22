/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var cache = {};
  var len = s.length;
  var count = t.length;
  var min = Infinity;
  var left, right, start, temp;

  // 统计字符数量
  for (right = 0; right < count; right++) cache[t[right]] = -~cache[t[right]];

  for (left = 0, right = 0; right < len; right++) {
    temp = s[right];
    // 不是 T 中的字符
    if (cache[temp] === void 0) continue;

    // 字符剩余量 - 1, 剩余量大于 0 时, 子串需要的字符数 - 1
    if (cache[temp]-- > 0) count--;

    // 已经满足子串条件
    if (count <= 0) {
      while (left < len) {
        temp = s[left];
        // 最左边不是 T 中的字符
        if (cache[temp] === void 0) { left++; }

        // 刚好满足子串需要最小字符数
        else if (cache[temp] >= 0) { break; }

        // 最左边字符出现次数大于所需
        else {
          cache[temp]++;
          left++;
        }
      }

      // 更新最小串
      if ((temp = right - left) < min) [start, min] = [left, temp];
    }
  }

  return count > 0 ? '' : s.slice(start, start + min + 1);
};

module.exports = minWindow;
