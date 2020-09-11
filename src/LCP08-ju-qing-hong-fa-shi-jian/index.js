/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function (increase, requirements) {
  var len = increase.length;
  var listC = new Array(len + 1);
  var listR = new Array(len + 1);
  var listH = new Array(len + 1);
  var c, r, h;

  listC[0] = listR[0] = listH[0] = 0;
  for (var i = 0; i < len; i++) {
    [c, r, h] = increase[i];
    listC[i + 1] = listC[i] + c;
    listR[i + 1] = listR[i] + r;
    listH[i + 1] = listH[i] + h;
  }

  return requirements.map(([c, r, h]) => {
    var index = 0;

    index = search(c, listC, index, len);
    index = search(r, listR, index, len);
    index = search(h, listH, index, len);
    return index <= len ? index : -1;
  });
};

function search(target, list, left, right) {
  while (left < right) {
    var mid = (left + right) >> 1;
    if (target <= list[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return list[left] < target ? left + 1 : left;
}

module.exports = getTriggerTime;
