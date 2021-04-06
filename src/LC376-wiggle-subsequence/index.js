/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  var len = nums.length;
  if (len <= 1) return len;

  var countL = 1;
  var countH = 1;
  var lastL = nums[0];
  var lastH = nums[0];
  for (var i = 1; i < len; i++) {
    var n = nums[i];
    var diffLow = n - lastL;
    var diffHigh = n - lastH;
    var countL_ = countL;
    var countH_ = countH;

    var count = countL_;
    var curr = Math.min(lastL, n);
    if (diffHigh < 0 && countH_ + 1 >= countL_) {
      count = countH_ + 1;
      if (countH_ + 1 === countL_) curr = Math.min(curr, n);
      else curr = n;
    }
    countL = count;
    lastL = curr;

    count = countH_;
    curr = Math.max(lastH, n);
    if (diffLow > 0 && countL_ + 1 >= countH_) {
      count = countL_ + 1;
      if (countL_ + 1 === countH_) curr = Math.max(curr, n);
      else curr = n;
    }
    countH = count;
    lastH = curr;
  }

  return Math.max(countL, countH);
};

module.exports = wiggleMaxLength;
