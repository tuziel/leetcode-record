/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var i = num1.length;
  var j = num2.length;
  if (i < j) [num1, num2, i, j] = [num2, num1, j, i];
  var record = new Array(Math.max(i, j));
  var flag = 0;
  var curr;

  while (i--) {
    curr = (+num1[i] || 0) + (+num2[--j] || 0) + flag;
    if (curr >= 10) {
      flag = 1;
      curr -= 10;
    } else {
      flag = 0;
    }
    record[i] = curr;
  }

  return flag ? 1 + record.join('') : record.join('');
};

module.exports = addStrings;
