const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '1340. 跳跃游戏 V';
const tepmlate = ({ input, output }) =>
  `输入: arr = ${JSON.stringify(input[0])}
            start = ${input[1]}
      输出: ${output}`;

const samples = [
  { input: [[6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2], output: 4 },
  { input: [[3, 3, 3, 3, 3], 3], output: 1 },
  { input: [[7, 6, 5, 4, 3, 2, 1], 1], output: 7 },
  { input: [[7, 1, 7, 1, 7, 1], 2], output: 2 },
  { input: [[66], 1], output: 1 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
