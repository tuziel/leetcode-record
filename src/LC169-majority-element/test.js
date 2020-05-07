/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '169. 多数元素';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}; 输出: ${output}`;

const samples = [
  { input: [3, 2, 3], output: 3, },
  { input: [2, 2, 1, 1, 1, 2, 2], output: 2, },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
