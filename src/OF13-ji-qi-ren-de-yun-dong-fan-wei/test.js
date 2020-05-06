/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '面试题13. 机器人的运动范围';
const tepmlate = ({ input, output }) =>
  `输入: m = ${input[0]}, n = ${input[1]}, k = ${input[2]}; 输出: ${output}`;

const samples = [
  { input: [2, 3, 1], output: 3, },
  { input: [3, 1, 0], output: 1, },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
