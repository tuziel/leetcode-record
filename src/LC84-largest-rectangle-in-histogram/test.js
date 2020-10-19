const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '84. 柱状图中最大的矩形';
const tepmlate = ({ input, output }) =>
  `输入: ${slice64(input)}
      输出: ${output}`;

const samples = [
  {
    input: [],
    output: 0,
  },
  {
    input: [10],
    output: 10,
  },
  {
    input: [2, 1, 5, 6, 2, 3],
    output: 10,
  },
  {
    input: JSON.parse('[6,1,8,4,4,8,3,8,5,7,10,6,6,7,8,9,3,4,3,6,5,9,3,8,10,6,7,1,8,3,9,1,7,2,3,8,3,7,4,3,1,2,3,6,7,9,3,3,9,2,10,2,2,7,8,3,2,3,8,10,3,8,6,4,4,6,4,1,8,2,6,9,10,1,9,4,7,3,2,8,10,1,4,9,6,8,2,3,2,1,8,5,10,10,7,8,5,9,1,2]'),
    output: 100,
  },
  {
    input: JSON.parse('[30,5,75,52,41,33,90,67,58,24,58,60,59,2,45,18,9,42,83,71,90,81,70,5,88,27,33,64,32,6,78,55,58,43,22,10,72,83,13,3,49,92,73,16,86,17,19,73,84,60,66,40,26,8,86,2,83,32,19,1,85,36,77,19,88,27,27]'),
    output: 350,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
