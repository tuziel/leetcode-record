/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  var len = ratings.length;
  var result = new Array(len).fill(1);

  var last = -Infinity;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (last < ratings[i]) result[i] = ++count;
    else count = 1;
    last = ratings[i];
  }

  last = -Infinity;
  count = 0;
  for (i = len; i--;) {
    if (last < ratings[i]) result[i] = Math.max(result[i], ++count);
    else count = 1;
    last = ratings[i];
  }

  return result.reduce((sum, n) => sum + n, 0);
};

module.exports = candy;
