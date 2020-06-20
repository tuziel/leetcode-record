/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '7. 整数反转';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: 123, output: 321 },
  { input: -123, output: -321 },
  { input: 120, output: 21 },
  { input: 10, output: 1 },
  { input: 1534236469, output: 0 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
