/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => a - b);
  var triangle = [A.pop(), A.pop(), A.pop()];

  while (triangle[0] >= triangle[1] + triangle[2]) {
    if (!A.length) return 0;
    triangle.shift();
    triangle.push(A.pop());
  }

  return triangle.reduce((a, b) => a + b);
};

module.exports = largestPerimeter;
