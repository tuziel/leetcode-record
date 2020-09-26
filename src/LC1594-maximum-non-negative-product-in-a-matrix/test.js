const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '1594. 矩阵的最大非负积';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output}`;

const samples = [
  {
    input: [
      [-1, -2, -3],
      [-2, -3, -3],
      [-3, -3, -2],
    ],
    output: -1,
  },
  {
    input: [
      [1, -2, 1],
      [1, -2, 1],
      [3, -4, 1],
    ],
    output: 8,
  },
  {
    input: [
      [1, 3],
      [0, -4],
    ],
    output: 0,
  },
  {
    input: [
      [1, 4, 4, 0],
      [-2, 0, 0, 1],
      [1, -1, 1, 1],
    ],
    output: 2,
  },
  {
    input: JSON.parse('[[2,1,3,0,-3,3,-4,4,0,-4],[-4,-3,2,2,3,-3,1,-1,1,-2],[-2,0,-4,2,4,-3,-4,-1,3,4],[-1,0,1,0,-3,3,-2,-3,1,0],[0,-1,-2,0,-3,-4,0,3,-2,-2],[-4,-2,0,-1,0,-3,0,4,0,-3],[-3,-4,2,1,0,-4,2,-4,-1,-3],[3,-2,0,-4,1,0,1,-3,-1,-1],[3,-4,0,2,0,-2,2,-4,-2,4],[0,4,0,-3,-4,3,3,-1,-2,-2]]'),
    output: 19215865,
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
