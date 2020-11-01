/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  var len = releaseTimes.length;
  var last = 0;
  var max = 0;
  var res = 'a';

  for (var i = 0; i < len; i++) {
    var d = releaseTimes[i] - last;
    last = releaseTimes[i];
    if (d < max) continue;
    if (d > max) {
      max = d;
      res = keysPressed[i];
    } else if (keysPressed[i] > res) {
      res = keysPressed[i];
    }
  }

  return res;
};

module.exports = slowestKey;
