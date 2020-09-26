const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '55. 跳跃游戏';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}
      输出: ${output}`;

const samples = [
  { input: [0], output: true },
  { input: [2, 3, 1, 1, 4], output: true },
  { input: [3, 2, 1, 0, 4], output: false },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
