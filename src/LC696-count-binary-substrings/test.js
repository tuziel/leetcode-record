const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '696. 计数二进制子串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '00110011', output: 6 },
  { input: '00110', output: 3 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
