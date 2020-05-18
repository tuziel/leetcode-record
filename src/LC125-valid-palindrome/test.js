/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '125. 验证回文串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '', output: true },
  { input: 'A man, a plan, a canal: Panama', output: true },
  { input: 'race a car', output: false },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
