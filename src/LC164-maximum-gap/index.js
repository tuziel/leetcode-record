/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  var buckets = [];

  nums.forEach((n) => {
    var key = (n >> 4 << 4) ^ n;
    (buckets[key] || (buckets[key] = [])).push(n);
  });

  for (var base = 1; buckets.length > 1; base++) {
    var next = [];
    buckets.forEach((bucket) => {
      bucket.forEach((n) => {
        var m = base < 8 ? n >> (base * 4) : 0;
        var key = (m >> 4 << 4) ^ m;
        (next[key] || (next[key] = [])).push(n);
      });
    });
    buckets = next;
  }

  var max = 0;
  buckets[0].reduce((prev, next) => {
    var diff = next - prev;
    if (diff > max) max = diff;
    return next;
  });
  return max;
};

module.exports = maximumGap;
