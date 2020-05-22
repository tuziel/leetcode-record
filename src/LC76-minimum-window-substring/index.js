/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var pos = {};
  var recordC = [];
  var recordI = [];
  var index = 0;
  var count = t.length;
  var len = s.length;
  var min = Infinity;
  var start, end;

  for (index = 0; index < count; index++) {
    (pos[t[index]] || (pos[t[index]] = [])).push(-1);
  }

  for (index = 0; index < len; index++) {
    var char = s[index];
    // 不是 T 中的字符
    if (pos[char] === void 0) continue;

    // 发现新的字符时计数 - 1
    if (pos[char][0] === -1) count--;
    // 记录当前字符与位置
    recordC.push(char);
    recordI.push(index);
    // 更新哈希表
    pos[char].shift();
    pos[char].push(index);

    // 是否已经发现所有字符
    if (count === 0) {
      // 更新记录
      while (pos[recordC[0]][0] !== recordI[0]) {
        recordC.shift();
        recordI.shift();
      }
      // 当前字串长度是否更短
      var _start = recordI[0];
      var _end = recordI[recordI.length - 1];
      var _min = _end - _start;
      if (_min < min) {
        [start, end, min] = [_start, _end, _min];
      }
    }
  }

  if (count) return '';
  return s.slice(start, end + 1);
};

module.exports = minWindow;
