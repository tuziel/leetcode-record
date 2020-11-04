const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '57. 插入区间';
const tepmlate = ({ input: [intervals, newInterval], output }) => {
  return `输入: intervals = ${slice64(intervals)}
            newInterval = ${slice64(newInterval)}
      输出: ${slice64(output)}`;
};

const samples = [
  {
    input: [
      [[3, 5], [12, 15]],
      [6, 6],
    ],
    output: [[3, 5], [6, 6], [12, 15]],
  },
  {
    input: [
      [],
      [5, 7],
    ],
    output: [[5, 7]],
  },
  {
    input: [
      [[1, 3], [6, 9]],
      [2, 5],
    ],
    output: [[1, 5], [6, 9]],
  },
  {
    input: [
      [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
      [4, 8],
    ],
    output: [[1, 2], [3, 10], [12, 16]],
  },
  {
    input: [
      [[1, 5]],
      [2, 3],
    ],
    output: [[1, 5]],
  },
  {
    input: [
      [[1, 5]],
      [6, 8],
    ],
    output: [[1, 5], [6, 8]],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.deep.equal(i.output);
    });
  }
});
