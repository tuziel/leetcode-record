/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  var len = nums.length;
  if (len === 1) return Math.abs(nums[0] - 24) < 1e-5;

  var i, j, next;
  for (i = 0; i < len; i++) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    for (j = 1; j < len; j++) {
      [nums[1], nums[j]] = [nums[j], nums[1]];
      next = nums.slice(2);
      if (judgePoint24([...next, nums[0] + nums[1]])) return true;
      if (judgePoint24([...next, nums[0] - nums[1]])) return true;
      if (judgePoint24([...next, nums[0] * nums[1]])) return true;
      if (judgePoint24([...next, nums[0] / nums[1]])) return true;
      [nums[1], nums[j]] = [nums[j], nums[1]];
    }
    [nums[0], nums[i]] = [nums[i], nums[0]];
  }

  return false;
};

module.exports = judgePoint24;
