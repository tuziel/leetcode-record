/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  var index = arr.length;
  var endIndex = index - 1;
  var graph = {};
  var hasVisited = { '-1': true, [index]: true };
  var queue = [0];
  var step = 0;
  var count, value, edges, temp;

  // 初始化图
  while (index--) {
    value = arr[index];
    if (temp !== value) {
      (graph[value] || (graph[value] = [])).push(index);
      if (count > 1) (graph[temp] || (graph[temp] = [])).push(index + 1);
      count = 0;
    }
    temp = value;
    count++;
  }
  if (count > 1) (graph[temp] || (graph[temp] = [])).push(index + 1);

  // console.log(graph);
  while ((count = queue.length)) {
    // console.log(`第 ${step} 步`)
    while (count--) {
      // 获取下标和值
      value = arr[index = queue.shift()];
      // 访问过的跳过
      if (hasVisited[index]) continue;
      // console.log(`访问了 ${index}, 值为 ${value}`)

      // 前后两格
      queue.push(index + 1);
      queue.push(index - 1);

      // 相同的值
      edges = graph[value];
      temp = edges.length;
      while (temp--) queue.push(edges[temp]);

      // 记录访问
      hasVisited[index] = true;
    }
    // 访问过了则结束
    if (hasVisited[endIndex]) return step;
    // BFS一次，步数+1
    step++;
  }

  return -1;
};

module.exports = minJumps;
