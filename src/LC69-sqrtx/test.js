const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = 'x 的平方根';
const tepmlate = ({ input, output }) =>
  `输入: ${input}; 输出: ${output}`;

const samples = [
  { input: 4, output: 2 },
  { input: 8, output: 2 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
