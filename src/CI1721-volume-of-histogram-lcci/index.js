/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  var len = height.length;
  var left = new Array(len);
  var right = new Array(len);
  var cache, i;

  cache = 0;
  for (i = 0; i < len; i++) {
    left[i] = Math.max(0, cache - height[i]);
    cache = Math.max(cache, height[i]);
  }

  cache = 0;
  for (i = len; i--;) {
    right[i] = Math.max(0, cache - height[i]);
    cache = Math.max(cache, height[i]);
  }

  cache = 0;
  for (i = 0; i < len; i++) {
    cache += Math.min(left[i], right[i]);
  }

  return cache;
};

module.exports = trap;
