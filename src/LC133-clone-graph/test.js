const process = require('process');
const expect = require('chai').expect;
const { Node, createGraph } = require('../utils');
global.Node = Node;

const func = require('.');
const title = '133. 克隆图';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}
      输出: ${JSON.stringify(output)}`;

const samples = [
  {
    input: [[2, 4], [1, 3], [2, 4], [1, 3]],
    output: [[2, 4], [1, 3], [2, 4], [1, 3]],
  },
  {
    input: [[]],
    output: [[]],
  },
  {
    input: [],
    output: [],
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      const node = createGraph(i.input);

      // XXX: 不会写这个断言
      expect(func(node)).to.deep.equal(node);
    });
  }
});
