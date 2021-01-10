/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  var graph = [];
  allowedSwaps.forEach(([form, to]) => {
    (graph[form] || (graph[form] = [])).push(to);
    (graph[to] || (graph[to] = [])).push(form);
  });

  var len = source.length;
  var traversed = new Array(len);
  var res = 0;

  for (var index = 0; index < len; index++) {
    var before = [];
    var after = [];
    var stack = [index];
    while (stack.length) {
      var curr = stack.pop();
      if (traversed[curr]) continue;
      traversed[curr] = 1;

      before.push(source[curr]);
      after.push(target[curr]);

      if (graph[curr]) stack.push(...graph[curr]);
    }
    res += calcDiff(before, after);
  }

  return res;
};

function calcDiff(before, after) {
  var diff = before.length;
  var map = {};
  before.forEach((n) => map[n] = -~map[n]);
  after.forEach((n) => {
    if (map[n]) {
      map[n]--;
      diff--;
    }
  });
  return diff;
}

module.exports = minimumHammingDistance;
