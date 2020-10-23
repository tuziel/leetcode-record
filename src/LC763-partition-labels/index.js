/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  var len = S.length;
  var cache = {};
  var i, j, temp;

  for (i = 0; i < len; i++) {
    temp = S[i];
    (cache[temp] || (cache[temp] = [])).push(i);
  }

  var result = [-1];
  for (i = 0; i < len; i++) {
    temp = cache[S[i]];
    if (temp.length > 1) {
      j = temp[temp.length - 1];
      while (++i < j) {
        temp = cache[S[i]];
        if (temp.length > 1) j = Math.max(j, temp[temp.length - 1]);
      }
      result.push(j);
    } else {
      result.push(i);
    }
  }

  len = result.length - 1;
  temp = new Array(len);
  for (i = 0; i < len; i++) {
    temp[i] = result[i + 1] - result[i];
  }

  return temp;
};

module.exports = partitionLabels;
