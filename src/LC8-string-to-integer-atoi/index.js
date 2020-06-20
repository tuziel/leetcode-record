/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  var len = str.length;
  var INT_MAX = 2147483647;
  var INT_MIN = -2147483648;
  var mx = 214748364;
  var minus = 0;
  var state = 0;
  var res = 0;
  var i, char, code;

  var isNumber = (c) => 48 <= c && c <= 57;

  for (i = 0; i < len; i++) {
    char = str[i];
    code = char.charCodeAt();

    if (state === 0) {
      if (code === 32) {
        continue;
      } else if (code === 43) {
        state = 1;
      } else if (code === 45) {
        minus = 1;
        state = 1;
      } else if (isNumber(code)) {
        res = +char;
        state = 1;
      } else {
        return 0;
      }

    } else if (state === 1) {
      if (isNumber(code)) {
        if (res > mx || (res === mx && code >= 55 + minus)) {
          return minus ? INT_MIN : INT_MAX;
        }
        res = res * 10 + +char;
      } else {
        return minus ? -res : res;
      }
    }
  }

  return minus ? -res : res;
};

module.exports = myAtoi;
