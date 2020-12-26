/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  var len = nums.length;
  var result = [[]];

  var count = 0;
  var n = nums[0];
  for (var i = 0; i < len;) {
    for (count = 0; n === nums[i]; i++) count++;

    for (var j = 0, l = result.length; j < l; j++) {
      var curr = result[j].slice();
      for (var k = count; k--;) {
        curr.push(n);
        result.push(curr.slice());
      }
    }

    n = nums[i];
  }

  return result;
};

module.exports = subsetsWithDup;
