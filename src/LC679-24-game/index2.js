/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  var [a, b, c, d] = nums;

  return judgePoint24_3(a, b, c + d) || judgePoint24_3(a, b, c * d)
    || judgePoint24_3(a, b, c - d) || judgePoint24_3(a, b, d - c)
    || judgePoint24_3(a, b, c / d) || judgePoint24_3(a, b, d / c)

    || judgePoint24_3(a, c, b + d) || judgePoint24_3(a, c, b * d)
    || judgePoint24_3(a, c, b - d) || judgePoint24_3(a, c, d - b)
    || judgePoint24_3(a, c, b / d) || judgePoint24_3(a, c, d / b)

    || judgePoint24_3(a, d, b + c) || judgePoint24_3(a, d, b * c)
    || judgePoint24_3(a, d, b - c) || judgePoint24_3(a, d, c - b)
    || judgePoint24_3(a, d, b / c) || judgePoint24_3(a, d, c / b)

    || judgePoint24_3(b, c, a + d) || judgePoint24_3(b, c, a * d)
    || judgePoint24_3(b, c, a - d) || judgePoint24_3(b, c, d - a)
    || judgePoint24_3(b, c, a / d) || judgePoint24_3(b, c, d / a)

    || judgePoint24_3(b, d, a + c) || judgePoint24_3(b, d, a * c)
    || judgePoint24_3(b, d, a - c) || judgePoint24_3(b, d, c - a)
    || judgePoint24_3(b, d, a / c) || judgePoint24_3(b, d, c / a)

    || judgePoint24_3(c, d, a + b) || judgePoint24_3(c, d, a * b)
    || judgePoint24_3(c, d, a - b) || judgePoint24_3(c, d, b - a)
    || judgePoint24_3(c, d, a / b) || judgePoint24_3(c, d, b / a);
};

function judgePoint24_3(a, b, c) {
  return judgePoint24_2(a, b + c) || judgePoint24_2(a, b * c)
    || judgePoint24_2(a, b - c) || judgePoint24_2(a, c - b)
    || judgePoint24_2(a, b / c) || judgePoint24_2(a, c / b)

    || judgePoint24_2(b, a + c) || judgePoint24_2(b, a * c)
    || judgePoint24_2(b, a - c) || judgePoint24_2(b, c - a)
    || judgePoint24_2(b, a / c) || judgePoint24_2(b, c / a)

    || judgePoint24_2(c, a + b) || judgePoint24_2(c, a * b)
    || judgePoint24_2(c, a - b) || judgePoint24_2(c, b - a)
    || judgePoint24_2(c, a / b) || judgePoint24_2(c, b / a);
}

function judgePoint24_2(a, b) {
  return isEqual24(a + b) || isEqual24(a * b)
    || isEqual24(a - b) || isEqual24(b - a)
    || isEqual24(a / b) || isEqual24(b / a);
}

function isEqual24(a) { return Math.abs(a - 24) < 1e-5; }

module.exports = judgePoint24;
