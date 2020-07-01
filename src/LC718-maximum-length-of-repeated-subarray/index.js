/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  var lenA = A.length;
  var lenB = B.length;
  var i, left, right, count;
  var res = 0;

  // A 固定，滑动 B，比较 A, B 重叠部分相同子串长度

  /**
   * 1 2 3 4 5
   *     ← 3 4 5 6 7
   */
  i = lenA;
  while (i--) {
    left = i;
    right = Math.min(lenA, i + lenB);
    count = 0;
    while (left < right) {
      if (A[left] === B[left - i]) {
        count++;
      } else {
        if (count > res) res = count;
        count = 0;
      }

      left++;
    }
    if (count > res) res = count;
  }

  /**
   *     1 2 3 4 5
   * 3 4 5 6 7 →
   */
  i = lenB;
  while (i-- > 1) {
    left = 0;
    right = Math.min(lenA, lenB - i);
    count = 0;
    while (left < right) {
      if (A[left] === B[left + i]) {
        count++;
      } else {
        if (count > res) res = count;
        count = 0;
      }

      left++;
    }
    if (count > res) res = count;
  }

  return res;
};

module.exports = findLength;
