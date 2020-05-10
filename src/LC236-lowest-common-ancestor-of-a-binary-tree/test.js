/* global describe it */
const process = require('process');
const expect = require('chai').expect;
const { createTreeList } = require('../utils');

const func = require('.');
const title = '236. 二叉树的最近公共祖先';
const tepmlate = ({ input, output }) =>
  `输入: root = ${JSON.stringify(input[0])}
            p = ${input[1]}, q= ${input[2]}
      输出: ${output}`;

const samples = [
  {
    input: [
      [1, 2],
      1,
      2,
    ],
    output: 1,
  },
  {
    input: [
      [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      5,
      1,
    ],
    output: 3,
  },
  {
    input: [
      [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      5,
      4,
    ],
    output: 5,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      const [a, b, c] = i.input;
      const treeList = createTreeList(a);
      const root = treeList[0];
      const p = treeList[a.indexOf(b)];
      const q = treeList[a.indexOf(c)];
      const o = treeList[a.indexOf(i.output)];
      expect(func(root, p, q)).to.equal(o);
    });
  }
});
