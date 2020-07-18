/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  var len1 = s1.length;
  var len2 = s2.length;
  var len3 = s3.length;

  if (len1 + len2 !== len3) return false;

  var dp = {};

  function f(i1, i2, i3) {
    // 匹配结束
    if (i3 === len3) return true;

    // 记忆化
    var key = `${i1},${i2}`;
    if (dp[key] !== undefined) return dp[key];

    var e12 = s1[i1] === s2[i2];
    var e13 = s1[i1] === s3[i3];
    var e23 = s2[i2] === s3[i3];

    var val = false;
    if (e12 && e13) val = f(i1 + 1, i2, i3 + 1) || f(i1, i2 + 1, i3 + 1);
    else if (e13) val = f(i1 + 1, i2, i3 + 1);
    else if (e23) val = f(i1, i2 + 1, i3 + 1);

    return dp[key] = val;
  }

  return f(0, 0, 0);
};

module.exports = isInterleave;
