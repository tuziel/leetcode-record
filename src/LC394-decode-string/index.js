/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var left = s.length;
  if (left <= 1) return s;

  var right = left;
  var cache = [[]];
  var level = 0;
  var char;

  /**
   * 状态转换 \
   * 0 START => 3, 4, 5 \
   * 1 [     => 2, 3, 4 \
   * 2 ]     => 2, 3, 4, 5 \
   * 3 char  => 2, 3, 4, 5 \
   * 4 int   => 1, 4 \
   * 5 END
   */
  var token = 5;

  var merge = (strings) => strings.reduceRight((res, next) => res + next);
  var getSlice = () => s.slice(left + 1, right);
  var pushString = () => cache[level].push(getSlice());
  var pushStrings = () => cache[level].push(merge(cache[level + 1]).repeat(getSlice()));

  while (left--) {
    char = s[left];

    if (char === '[') {
      if (token === 3) pushString();
      else if (token === 4) pushStrings();
      level--;
      token = 1;

    } else if (char === ']') {
      if (token === 3) pushString();
      else if (token === 4) pushStrings();
      cache[++level] = [];
      token = 2;

    } else if (isNaN(char)) {
      if (token === 4) pushStrings();
      if (token !== 3) right = left + 1;
      token = 3;

    } else {
      if (token === 1) right = left + 1;

      token = 4;
    }
  }

  if (token === 3) pushString();
  else if (token === 4) pushStrings();

  return merge(cache[0]);
};

module.exports = decodeString;
