const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '5619. 最小不兼容性';
const tepmlate = ({ input: [nums, k], output }) =>
  `输入: nums = ${slice64(nums)}
            k = ${slice64(k)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      [1],
      1,
    ],
    output: 0,
  },
  {
    input: [
      [1, 2, 1, 4],
      2,
    ],
    output: 4,
  },
  {
    input: [
      [6, 3, 8, 1, 3, 1, 2, 2],
      4,
    ],
    output: 6,
  },
  {
    input: [
      [5, 3, 3, 6, 3, 3],
      3,
    ],
    output: -1,
  },
  {
    input: [
      [3, 2, 1, 12, 10, 11, 6, 7, 6, 5, 10, 5],
      3,
    ],
    output: 15,
  },
  {
    input: [
      [5, 3, 2, 11, 5, 8, 7, 7, 6, 2, 4, 5],
      12,
    ],
    output: 0,
  },
  {
    input: [
      [13, 4, 7, 3, 3, 1, 12, 9, 11, 10, 13, 3, 12, 7],
      7,
    ],
    output: 12,
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
