/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var len = nums.length;
  var res = [];

  function backtrack(index) {
    if (index >= len) return res.push(nums.slice());

    var record = [];
    for (var i = index; i < len; i++) {
      var num = nums[i];
      if (record[num]) continue;
      record[num] = 1;

      [nums[index], nums[i]] = [nums[i], nums[index]];
      backtrack(index + 1);
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }
  }

  backtrack(0);
  return res;
};

module.exports = permuteUnique;
