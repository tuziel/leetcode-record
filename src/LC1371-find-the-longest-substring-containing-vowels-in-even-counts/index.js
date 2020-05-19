/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  var len = s.length;
  var map = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  var record = Array.from(new Array(32), () => []);
  var status = new Array(len);
  var result = 0;
  var curr = status[0] = map[s[0]] || 0;
  record[curr].push(0);

  var max = (a, b) => a > b ? a : b;

  for (var i = 1; i < len; i++) {
    status[i] = curr ^= map[s[i]];
    record[curr].push(i);
  }

  if (record[0].length) result = record[0].pop() + 1;

  for (i = 1; i < 32; i++) {
    if (record[i].length < 2) continue;
    result = max(result, record[i].pop() - record[i][0]);
  }

  return result;
};

module.exports = findTheLongestSubstring;
