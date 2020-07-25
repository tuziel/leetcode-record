/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  var len = arr.length;
  var prefix = new Array(len);
  var res = 0;

  var sum = 0;
  for (var i = 0; i < len; i++) {
    if ((arr[i] %= 2)) sum ^= 1;
    prefix[i] = sum;
  }

  var odd = 0;
  var even = 0;
  while (i--) {
    if (prefix[i]) odd++;
    else even++;
    res += arr[i] ^ prefix[i] ? even : odd;
  }

  return res % 1000000007;
};

module.exports = numOfSubarrays;
