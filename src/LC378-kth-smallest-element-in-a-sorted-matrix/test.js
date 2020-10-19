const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '378. 有序矩阵中第K小的元素';
const tepmlate = ({ input: [matrix, k], output }) =>
  `输入: matrix = ${slice64(matrix)}
            k = ${k}
      输出: ${output}`;

const samples = [
  {
    input: [
      [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
      ],
      8,
    ],
    output: 13,
  },
  {
    input: [
      [
        [1, 3, 5],
        [6, 7, 12],
        [11, 14, 14],
      ],
      6,
    ],
    output: 11,
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
