const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '136. 只出现一次的数字';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: [2, 2, 1], output: 1 },
  { input: [4, 1, 2, 1, 2], output: 4 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
