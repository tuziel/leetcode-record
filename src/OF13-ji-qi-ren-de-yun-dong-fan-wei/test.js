/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const movingCount = require('.');

const tepmlate = ({ input, output }) =>
  `输入：m = ${input[0]}, n = ${input[1]}, k = ${input[2]}; 输出：${output}`;

const samples = [
  { input: [2, 3, 1], output: 3, },
  { input: [3, 1, 0], output: 1, },
];

describe('面试题13. 机器人的运动范围', function () {
  for (const i of samples) {
    process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(movingCount.apply(null, i.input)).to.be.equal(i.output);
    });
  }
});
