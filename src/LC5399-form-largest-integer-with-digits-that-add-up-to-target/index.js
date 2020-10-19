/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  var result = [];
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var r = 9; r--;) {
    for (var l = r; l--;) {
      if (cost[l] % cost[r] === 0) {
        cost.splice(l, 1);
        number.splice(l, 1);
        break;
      }
      if (cost[r] % cost[l] === 0) {
        cost.splice(r, 1);
        number.splice(r, 1);
        break;
      }
    }
  }

  function dfs(total, curr, len) {
    if (total > target) return;
    if (total === target) {
      if (curr.length > result.length) {
        result = curr.slice();
      }
      return;
    }

    while (len--) {
      curr.push(number[len]);
      dfs(total + cost[len], curr, len + 1);
      curr.pop();
    }
  }

  dfs(0, [], cost.length);

  return result.join('') || '0';
};

module.exports = largestNumber;
