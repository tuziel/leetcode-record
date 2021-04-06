/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  var len = s.length;
  if (len < k) return 0;

  var freq = {};
  for (var char of s) freq[char] = -~freq[char];
  var res = 0;

  for (var [left, right] = [0, 0]; right < len; right++) {
    if (freq[s[right]] >= k) continue;

    res = Math.max(res, longestSubstring(s.slice(left, right), k));
    left = right + 1;
  }

  if (left === 0) return len;
  return Math.max(res, longestSubstring(s.slice(left, right), k));
};

module.exports = longestSubstring;
