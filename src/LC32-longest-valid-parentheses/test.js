const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '32. 最长有效括号';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${output}`;

const samples = [
  {
    input: '(()',
    output: 2,
  },
  {
    input: ')()())',
    output: 4,
  },
  {
    input: '())()((()(()()))()))()()())())(()())(()()(())(())()()()()()))(()((()((((()(())())(((()))()(((((())()',
    output: 30,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
