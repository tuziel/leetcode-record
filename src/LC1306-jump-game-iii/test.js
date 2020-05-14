/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '1306. 跳跃游戏 III';
const tepmlate = ({ input, output }) =>
  `输入: arr = ${JSON.stringify(input[0])}
            start = ${input[1]}
      输出: ${output}`;

const samples = [
  { input: [[4, 2, 3, 0, 3, 1, 2], 5], output: true, },
  { input: [[4, 2, 3, 0, 3, 1, 2], 0], output: true, },
  { input: [[3, 0, 2, 1, 2], 2], output: false, },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
