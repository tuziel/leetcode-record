/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTree } = require('../utils');

const func = require('.');
const title = '572. 另一个树的子树';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input[0])}
            ${JSON.stringify(input[1])}
      输出: ${output}`;

const samples = [
  {
    input: [
      [],
      [],
    ],
    output: true,
  },
  {
    input: [
      [4, 1, 2],
      [3, 4, 5, 1, 2],
    ],
    output: false,
  },
  {
    input: [
      [3, 4, 5, 1, 2],
      [4, 1, 2],
    ],
    output: true,
  },
  {
    input: [
      [3, 4, 5, 1, 2, null, null, null, 0],
      [4, 1, 2],
    ],
    output: false,
  },
  {
    input: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1],
    ],
    output: true,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input.map(createTree))).to.equal(i.output);
    });
  }
});
