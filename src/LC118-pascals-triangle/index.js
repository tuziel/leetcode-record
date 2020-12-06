/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  var result = [[1]];

  for (var i = 1; i < numRows; i++) {
    var row = new Array(i + 1);
    row[0] = row[i] = 1;
    var last = result[i - 1];
    for (var j = 1; j < i; j++) row[j] = last[j - 1] + last[j];
    result.push(row);
  }

  return result;
};

module.exports = generate;
