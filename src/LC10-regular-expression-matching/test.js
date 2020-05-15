/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '10. 正则表达式匹配';
const tepmlate = ({ input, output }) =>
  `输入: s = ${input[0]}, p = ${input[1]}; 输出: ${output}`;

const samples = [
  { input: ['aa', 'a'], output: false },
  { input: ['aa', 'a*'], output: true },
  { input: ['ab', '.*'], output: true },
  { input: ['aab', 'c*a*b'], output: true },
  { input: ['mississippi', 'mis*is*p*.'], output: false },
  { input: ['aaa', 'a*a'], output: true },
  { input: ['a', 'ab*'], output: true },
  { input: ['aaa', 'ab*a'], output: false },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
