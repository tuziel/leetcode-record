/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  var res = 0;
  var m = n;

  // 重复14次
  (m & 1) && (res += n);
  n <<= 1;
  m >>= 1;

  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n); n <<= 1; m >>= 1;
  (m & 1) && (res += n);

  return res >> 1;
};

module.exports = sumNums;
