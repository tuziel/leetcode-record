const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '990. 等式方程的可满足性';
const tepmlate = ({ input, output }) =>
  `输入: ${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(input))}
      输出: ${output}`;

const samples = [
  {
    input: ['a==b', 'b!=a'],
    output: false,
  },
  {
    input: ['b==a', 'a==b'],
    output: true,
  },
  {
    input: ['a==b', 'b==c', 'a==c'],
    output: true,
  },
  {
    input: ['a==b', 'b!=c', 'c==a'],
    output: false,
  },
  {
    input: ['c==c', 'b==d', 'x!=z'],
    output: true,
  },
  {
    input: ['c==c', 'f!=a', 'f==b', 'b==c'],
    output: true,
  },
  {
    input: ['f==a', 'a==b', 'f!=e', 'a==c', 'b==e', 'c==f'],
    output: false,
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










