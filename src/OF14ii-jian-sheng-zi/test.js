const task = require('../task');

task({
  type: 'default',
  func: require('.'),
  title: '面试题14- II. 剪绳子 II',
  tepmlate: ({ input, output }) => `输入: ${input}; 输出: ${output}`,
  samples: [
    { input: 58, output: 549681949, },
    { input: 100, output: 703522804, },
    { input: 512, output: 337299684, },
    { input: 1000, output: 620946522, },
  ],
});
