const task = require('../task');

task({
  type: 'tree',
  func: require('.'),
  title: '98. 验证二叉搜索树',
  tepmlate: ({ input, output }) =>
    `输入: ${JSON.stringify(input)}; 输出: ${output}`,
  samples: [
    { input: [], output: true, },
    { input: [0], output: true, },
    { input: [1, 1], output: false, },
    { input: [2, 1, 3], output: true, },
    { input: [5, 1, 4, null, null, 3, 6], output: false, },
    { input: [10, 5, 15, null, null, 6, 20], output: false, },
  ],
});
