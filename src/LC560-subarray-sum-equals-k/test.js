/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '560. 和为K的子数组';
const tepmlate = ({ input, output }) =>
  `输入: nums = ${JSON.stringify(input[0])}
            target = ${input[1]}
      输出: ${output}`;

const samples = [
  {
    input: [
      [1, 1, 1],
      2,
    ],
    output: 2,
  },
  {
    input: [
      [0, 0, 0, 1, 0, 0, 0],
      1,
    ],
    output: 16,
  },
  {
    input: [
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      1,
    ],
    output: 32,
  },
  {
    input: [
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      2,
    ],
    output: 16,
  },
  {
    input: [
      [0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0],
      1,
    ],
    output: 48,
  },
  {
    input: [
      [4, 4, 3, 3, 2, 0, 2, 1, 4, 4, 4, 1, 3, 3, 2, 0, 0, 1, 0, 2, 0, 4, 4, 3, 1, 1, 4, 3, 4, 2, 0, 0, 3, 1, 0, 1, 4, 2, 2, 3, 2, 0, 0, 0, 2, 2, 1, 4, 3, 0, 3, 0, 2, 4, 4, 4, 4, 2, 3, 1, 4, 1, 4, 2, 3, 1, 2, 0, 0, 3, 2, 4, 3, 0, 2, 4, 3, 0, 1, 2, 4, 1, 4, 1],
      10,
    ],
    output: 27,
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
