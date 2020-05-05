const task = require('../task');

task({
  type: 'default',
  func: require('.'),
  title: '面试题14- I. 剪绳子',
  tepmlate: ({ input, output }) => `输入：${input}; 输出：${output}`,
  samples: [
    { input: 2, output: 1, },
    { input: 3, output: 2, },
    { input: 4, output: 4, },
    { input: 5, output: 6, },
    { input: 10, output: 36, },
    { input: 16, output: 324, },
    { input: 58, output: 1549681956, },
  ],
});
