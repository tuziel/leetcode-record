const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '面试题46. 把数字翻译成字符串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: 12258, output: 5 },
  { input: 11111, output: 8 },
  { input: 10983247, output: 4 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
