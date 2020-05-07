/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '6. Z 字形变换';
const tepmlate = ({ input, output }) =>
  `输入: ${input[0]}, ${input[1]}
      输出: ${output}`;

const samples = [
  {
    input: ['A', 1],
    output: 'A',
  },
  {
    input: ['LEETCODEISHIRING', 3],
    output: 'LCIRETOESIIGEDHN',
  },
  {
    input: ['LEETCODEISHIRING', 4],
    output: 'LDREOEIIECIHNTSG',
  },
  {
    input: ['PAYPALISHIRING', 3],
    output: 'PAHNAPLSIIGYIR',
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
