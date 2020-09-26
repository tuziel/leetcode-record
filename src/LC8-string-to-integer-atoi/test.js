const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '8. 字符串转换整数 (atoi)';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${output}`;

const samples = [
  { input: '42', output: 42 },
  { input: '   -42', output: -42 },
  { input: '4193 with words', output: 4193 },
  { input: 'words and 987', output: 0 },
  { input: '-91283472332', output: -2147483648 },
  { input: '+1', output: 1 },
  { input: '2147483646', output: 2147483646 },
  { input: '2147483647', output: 2147483647 },
  { input: '2147483648', output: 2147483647 },
  { input: '-2147483647', output: -2147483647 },
  { input: '-2147483648', output: -2147483648 },
  { input: '-2147483649', output: -2147483648 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
