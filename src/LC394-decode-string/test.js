const process = require('process');
const expect = require('chai').expect;
const { slice64 } = require('../utils');

const func = require('.');
const title = '394. 字符串解码';
const tepmlate = ({ input, output }) =>
  `输入: ${input}
      输出: ${slice64(output)}`;

const samples = [
  { input: '', output: '' },
  { input: 'a', output: 'a' },
  { input: '3[a]2[bc]', output: 'aaabcbc' },
  { input: '3[a2[c]]', output: 'accaccacc' },
  { input: '2[abc]3[cd]ef', output: 'abcabccdcdcdef' },
  { input: '2[a22[2[abc]3[cd]efabc]3[cd]ef[abc]3[cd]efbc]3[cd]ef', output: 'aabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabccdcdcdefcdcdcdefbcaabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabcabcabccdcdcdefabccdcdcdefcdcdcdefbccdcdcdef' },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
