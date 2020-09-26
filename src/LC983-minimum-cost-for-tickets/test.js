const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '983. 最低票价';
const tepmlate = ({ input, output }) =>
  `输入: days = ${JSON.stringify(input[0])}
            costs =  ${JSON.stringify(input[1])}
      输出: ${output}`;

const samples = [
  {
    input: [
      [1, 4, 6, 7, 8, 20],
      [2, 7, 15],
    ],
    output: 11,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
      [2, 7, 15],
    ],
    output: 17,
  },
  {
    input: [
      [22, 65, 69, 85, 116, 138, 148, 156, 170, 197, 229, 269, 274, 304, 308, 312, 342, 347],
      [3, 2, 1],
    ],
    output: 9,
  },
  {
    input: [
      JSON.parse('[3,4,7,12,14,16,19,22,27,28,29,30,31,33,38,42,45,48,49,50,52,57,61,65,66,67,68,71,74,75,76,77,80,82,83,84,85,86,87,89,90,92,94,96,97,99,100,101,102,105,108,109,111,112,114,115,119,124,125,126,128,129,131,134,135,137,143,145,146,148,149,153,157,159,163,164,165,167,168,169,171,177,179,185,188,189,191,192,193,195,196,197,198,205,206,207,211,212,213,215,216,217,218,220,221,222,224,225,227,229,231,234,237,240,244,245,246,248,251,252,256,257,258,259,260,261,264,266,267,268,270,275,281,283,284,286,287,288,289,294,295,297,299,300,301,303,304,305,306,310,314,315,320,322,324,326,327,328,330,334,335,337,340,341,346,350,351,352,354,357,359,360,362]'),
      [2, 7, 17],
    ],
    output: 195,
  },
];

describe(title, function () {
  for (const i of samples) {
    process.send && process.send({ log: tepmlate(i) });
    it(tepmlate(i), function () {
      expect(func(...i.input)).to.equal(i.output);
    });
  }
});
