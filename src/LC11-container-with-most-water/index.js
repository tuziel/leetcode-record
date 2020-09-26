/**
  * @param {number[]} height
  * @return {number}
  */
var maxArea = function (height) {
  var iLeft = 0;
  var iRight = height.length - 1;
  var res = 0;

  while (iLeft < iRight) {
    var left = height[iLeft];
    var right = height[iRight];

    res = Math.max(res, Math.min(left, right) * (iRight - iLeft));

    if (left <= right) while (iLeft < iRight && left >= height[++iLeft]);
    else while (iLeft < iRight && height[--iRight] <= right);
  }

  return res;
};

module.exports = maxArea;
