const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '214. 最短回文串';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '', output: '' },
  { input: 'a', output: 'a' },
  { input: 'aa', output: 'aa' },
  { input: 'aaa', output: 'aaa' },
  { input: 'aaaa', output: 'aaaa' },
  { input: 'aaaaa', output: 'aaaaa' },
  { input: 'ab', output: 'bab' },
  { input: 'aab', output: 'baab' },
  { input: 'abb', output: 'bbabb' },
  { input: 'aaab', output: 'baaab' },
  { input: 'aabb', output: 'bbaabb' },
  { input: 'abbb', output: 'bbbabbb' },
  { input: 'aaaab', output: 'baaaab' },
  { input: 'aaabb', output: 'bbaaabb' },
  { input: 'aabbb', output: 'bbbaabbb' },
  { input: 'abbbb', output: 'bbbbabbbb' },
  { input: 'aacecaaa', output: 'aaacecaaa' },
  { input: 'abcd', output: 'dcbabcd' },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
