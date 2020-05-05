const task = require('../task');

task({
  type: 'default',
  func: require('.'),
  title: '45. 跳跃游戏 II',
  tepmlate: ({ input, output }) =>
    `输入：${JSON.stringify(input)}; 输出：${output}`,
  samples: [
    { input: [], output: 0, },
    { input: [1], output: 0, },
    { input: [2, 3, 1, 1, 4], output: 2, },
    { input: [4, 3, 2, 1, 0], output: 1, },
    { input: [1, 4, 3, 2, 1, 0], output: 2, },
    // { input: [1, 2, 1, 0, 0], output: -1, },
    {
      input: [6, 1, 8, 4, 4, 8, 3, 8, 5, 7, 10, 6, 6, 7, 8, 9, 3, 4, 3, 6, 5, 9, 3, 8, 10, 6, 7, 1, 8, 3, 9, 1, 7, 2, 3, 8, 3, 7, 4, 3, 1, 2, 3, 6, 7, 9, 3, 3, 9, 2, 10, 2, 2, 7, 8, 3, 2, 3, 8, 10, 3, 8, 6, 4, 4, 6, 4, 1, 8, 2, 6, 9, 10, 1, 9, 4, 7, 3, 2, 8, 10, 1, 4, 9, 6, 8, 2, 3, 2, 1, 8, 5, 10, 10, 7, 8, 5, 9, 1, 2],
      output: 14,
    },
  ],
});
