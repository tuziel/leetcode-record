/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function (jump) {
  var len = jump.length;
  var record = new Array(len).fill(0);
  var queue = [0];
  var min = 0;
  var max, max1, max2;
  max = max1 = max2 = 0;
  var result = 0;

  var count, curr, next;
  while (max < len) {
    result++;
    max1 = max2;
    max2 = max;

    count = queue.length;
    while (count--) {
      curr = queue.shift();
      if (record[curr]) continue;
      record[curr] = result;

      next = curr + jump[curr];
      if (next > max) max = next;
      if (next > max2) queue.push(next);
    }

    while (min < max1) {
      curr = min++;
      if (record[curr]) continue;
      record[curr] = result;

      next = curr + jump[curr];
      if (next > max) max = next;
      if (next > max2) queue.push(next);
    }
  }

  return result;
};

module.exports = minJump;
