/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  var stars = [];
  var ends = [];

  trips.forEach(([n, s, e]) => {
    stars[s] = (stars[s] || 0) + n;
    ends[e] = (ends[e] || 0) + n;
  });

  var curr = 0;
  for (var i = 0, l = stars.length; i < l; i++) {
    curr -= ends[i] || 0;
    curr += stars[i] || 0;
    if (curr > capacity) return false;
  }

  return true;
};

module.exports = carPooling;
