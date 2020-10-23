const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '1024. 视频拼接';
const tepmlate = ({ input: [count, time], output }) =>
  `输入: ${slice64(count)}
            ${slice64(time)}
      输出: ${slice64(output)}`;

const samples = [
  {
    input: [
      [[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]],
      10,
    ],
    output: 3,
  },
  {
    input: [
      [[0, 1], [1, 2]],
      5,
    ],
    output: -1,
  },
  {
    input: [
      [[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]],
      9,
    ],
    output: 3,
  },
  {
    input: [
      [[0, 4], [2, 8]],
      5,
    ],
    output: 2,
  },
  {
    input: [
      [[0, 5], [6, 8]],
      7,
    ],
    output: -1,
  },
  {
    input: [
      [[9, 10], [0, 4], [3, 5], [4, 4], [4, 5], [0, 4], [7, 10], [4, 10], [3, 6]],
      5,
    ],
    output: 2,
  },
  {
    input: [
      [[5, 7], [1, 8], [0, 0], [2, 3], [4, 5], [0, 6], [5, 10], [7, 10]],
      5,
    ],
    output: 1,
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
