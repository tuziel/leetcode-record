const process = require('process');
const expect = require('chai').expect;
const { createList } = require('../utils');

const func = require('.');
const title = '143. 重排链表';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output.slice(0, 64)}${output.length > 64 ? '...' : ''}`;

const samples = [
  { input: [], output: [] },
  { input: [1], output: [1] },
  { input: [1, 2], output: [1, 2] },
  { input: [1, 2, 3], output: [1, 3, 2] },
  { input: [1, 2, 3, 4], output: [1, 4, 2, 3] },
  { input: [1, 2, 3, 4, 5], output: [1, 5, 2, 4, 3] },
  { input: [1, 2, 3, 4, 5, 6], output: [1, 6, 2, 5, 3, 4] },
  { input: [1, 2, 3, 4, 5, 6, 7], output: [1, 7, 2, 6, 3, 5, 4] },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      const input = createList(i.input);
      func(input);
      expect(input).to.deep.equal(createList(i.output));
    });
  }
});
