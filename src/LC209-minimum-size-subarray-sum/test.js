/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '209. 长度最小的子数组';
const tepmlate = ({ input, output }) =>
  `输入: s=${input[0]}, nums${((i) => `${i.slice(0, 64)}${i.length > 56 ? '...' : ''}`)(JSON.stringify(input[1]))}
      输出: ${output}`;

const samples = [
  {
    input: [7, [2, 3, 1, 2, 4, 3]],
    output: 2,
  },
  {
    input: [11, [1, 2, 3, 4, 5]],
    output: 3,
  },
  {
    input: [15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]],
    output: 2,
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
