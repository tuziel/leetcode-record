const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '101. 对称二叉树';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output}`;

const samples = [
  {
    input: [1, 2, 2, 3, 4, 4, 3],
    output: true,
  },
  {
    input: [1, 2, 2, null, 3, null, 3],
    output: false,
  },
  {
    input: [1, 2, 3],
    output: false,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(createTree(i.input))).to.equal(i.output);
    });
  }
});
