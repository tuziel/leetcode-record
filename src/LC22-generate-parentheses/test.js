const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '22. 括号生成';
const tepmlate = ({ input, output }) =>
  `输入: ${input}; 输出: ${JSON.stringify(output)}`;

const samples = [
  {
    input: 3,
    output: ['((()))', '(()())', '(())()', '()(())', '()()()'],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.have.members(i.output);
    });
  }
});
