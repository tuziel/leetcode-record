/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  var len = nums.length;
  var cache = [];

  function backtrack(index) {
    if (cache[index]) return cache[index];

    var res = [];
    var curr = nums[index];
    var record = [];

    for (var i = index + 1; i < len; i++) {
      if (curr <= nums[i]) {
        if (record[nums[i]]) continue;
        record[nums[i]] = true;
        res.push([curr, nums[i]]);
        res.push(...backtrack(i).map((item) => [curr, ...item]));
      }
    }

    cache[index] = res;
    return res;
  }

  for (var i = 0; i < len; i++) backtrack(i);
  return trim(cache.reduce((res, curr = []) => [...res, ...curr], []));
};

function trim(arr) {
  var res = [];
  var record = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var key = `${arr[i]}`;
    if (record[key]) continue;
    record[key] = true;
    res.push(arr[i]);
  }
  return res;
}

module.exports = findSubsequences;
