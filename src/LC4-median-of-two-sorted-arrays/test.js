const process = require('process');
const expect = require('chai').expect;

const func = require('.');
const title = '4. 寻找两个正序数组的中位数';
const tepmlate = ({ input: [nums1, nums2], output }) =>
  `输入: nums1=${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(nums1))}
         nums2=${((i) => `${i.slice(0, 64)}${i.length > 64 ? '...' : ''}`)(JSON.stringify(nums2))}
      输出: ${output}`;

const samples = [
  {
    input: [
      [0],
      [0],
    ],
    output: 0,
  },
  {
    input: [
      [],
      [1],
    ],
    output: 1,
  },
  {
    input: [
      [],
      [1, 2],
    ],
    output: 1.5,
  },
  {
    input: [
      [],
      [1, 2, 3],
    ],
    output: 2,
  },
  {
    input: [
      [],
      [1, 2, 3, 4],
    ],
    output: 2.5,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5],
    ],
    output: 3,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5, 6],
    ],
    output: 3.5,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5, 6, 7],
    ],
    output: 4,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ],
    output: 4.5,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ],
    output: 5.5,
  },
  {
    input: [
      [1],
      [],
    ],
    output: 1,
  },
  {
    input: [
      [1, 2],
      [],
    ],
    output: 1.5,
  },
  {
    input: [
      [1, 2, 3],
      [],
    ],
    output: 2,
  },
  {
    input: [
      [1],
      [2, 3, 4, 5, 6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2],
      [3, 4, 5, 6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9],
    ],
    output: 5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9],
    ],
    output: 5,
  },
  {
    input: [
      [1],
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2],
      [3, 4, 5, 6, 7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10],
    ], output: 5.5,
  },
  {
    input: [
      [1, 2],
      [1],
    ],
    output: 1,
  },
  {
    input: [
      [1, 2],
      [1, 2],
    ],
    output: 1.5,
  },
  {
    input: [
      [1, 2, 3],
      [1, 2],
    ],
    output: 2,
  },
  {
    input: [
      [1, 2, 3],
      [1, 2, 3],
    ],
    output: 2,
  },
  {
    input: [
      [1],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    output: 4.5,
  },
  {
    input: [
      [1, 2],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ],
    output: 3.5,
  },
  {
    input: [
      [1, 2, 3],
      [1, 2, 3, 4, 5, 6, 7],
    ],
    output: 3,
  },
  {
    input: [
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5, 6],
    ],
    output: 3,
  },
  {
    input: [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
    output: 3,
  },
  {
    input: [
      [1, 3],
      [2, 4, 5],
    ],
    output: 3,
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
