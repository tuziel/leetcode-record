/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '面试题58 - II. 左旋转字符串';
const tepmlate = ({ input, output }) =>
  `输入: ${input[0]}, ${input[1]}
      输出: ${output}`;

const samples = [
  { input: ['abcdefg', 2], output: 'cdefgab', },
  { input: ['lrloseumgh', 6], output: 'umghlrlose', },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
