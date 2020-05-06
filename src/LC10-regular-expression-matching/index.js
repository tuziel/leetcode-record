/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var chars = s.split('');
  var states = p.split('').concat('END');

  return (function traversal(index, current) {
    var char = chars[index];
    var state = states[current];
    var nextState = states[current + 1];

    // 匹配结束
    if (state === 'END') {
      return index === chars.length;
    }

    // 匹配复数个
    else if (nextState === '*') {
      var plurals = 0;
      if (state === '.') {
        while (chars[index + plurals++])
          ;
      }
      else {
        while (chars[index + plurals++] === state)
          ;
      }
      while (plurals--) {
        if (traversal(index + plurals, current + 2)) {
          return true;
        }
      }
      return false;
    }

    // 匹配通配符
    else if (state === '.') {
      return traversal(index + 1, current + 1);
    }

    // 匹配字符
    else {
      return state === char
        ? traversal(index + 1, current + 1)
        : false;
    }
  })(0, 0);
};

module.exports = isMatch;
