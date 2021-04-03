/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  return (C - A) * (D - B)
    + (G - E) * (H - F)
    - getUnion(A, C, E, G) * getUnion(B, D, F, H);
};

function getUnion(a, b, c, d) {
  return Math.max(0, Math.min(b, d) - Math.max(a, c));
}

module.exports = computeArea;
