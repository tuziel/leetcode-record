/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = s.length;
  if (len <= 1) return len;
  var cache = {};
  var last = -1;
  var max = 1;
  var dis;

  for (var i = 0, l = len; i < l; i++) {
    var c = cache[s[i]];
    if (c !== undefined) {
      dis = i - last - 1;
      if (dis > max) max = dis;
      if (c > last) last = c;
    }
    cache[s[i]] = i;
  }
  dis = i - last - 1;

  return max > dis ? max : dis;
};

module.exports = lengthOfLongestSubstring;
