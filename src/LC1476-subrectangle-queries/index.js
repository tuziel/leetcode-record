/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
  var rectangle = this.rectangle;
  var row;
  for (var i = row1; i <= row2; i++) {
    row = rectangle[i];
    for (var j = col1; j <= col2; j++) {
      row[j] = newValue;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rectangle[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

module.exports = SubrectangleQueries;
