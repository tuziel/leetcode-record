/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  // 所有的单数只能减去单数，即变为双数
  // 所有的双数都能选 1 变为单数
  // 开局为双数，结局为 2，必定获胜
  // 开局为单数，轮到对方为双数，必定失败
  return N % 2 === 0;
};

module.exports = divisorGame;
