const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '152. 乘积最大子数组';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}; 输出: ${output}`;

const samples = [
  { input: [2, 3, -2, 4], output: 6 },
  { input: [-2, 0, -1], output: 0 },
  { input: [-2], output: -2 },
  { input: [-4, -3, -2], output: 12 },
  { input: [3, -1, 4], output: 4 },
  { input: [-2, -3, 7], output: 42 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
