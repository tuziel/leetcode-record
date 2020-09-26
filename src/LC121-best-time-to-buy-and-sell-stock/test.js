const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '121. 买卖股票的最佳时机';
const tepmlate = ({ input, output }) =>
  `输入: ${JSON.stringify(input)}; 输出: ${output}`;

const samples = [
  { input: [], output: 0 },
  { input: [7, 1, 5, 3, 6, 4], output: 5 },
  { input: [7, 6, 4, 3, 1], output: 0 },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(i.input)).to.equal(i.output);
    });
  }
});
