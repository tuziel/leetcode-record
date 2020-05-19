/* global describe it */
const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '1371. 每个元音包含偶数次的最长子字符串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: 'a', output: 0 },
  { input: 'eleetminicoworoep', output: 13 },
  { input: 'leetcodeisgreat', output: 5 },
  { input: 'bcbcbc', output: 6 },
  { input: 'uwpojaqsfiwcevmbiwnnpcdlrediqtdbuhlecgqnfihgxjxxxltboxsmliccvocatwvglrnaumn', output: 62 },
  { input: 'clhsbxpghrwypyysphmcyqcigiiwrkumgfiwpnhtqfppltf', output: 26 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
