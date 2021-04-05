/**
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
var orchestraLayout = function (num, xPos, yPos) {
  // 中间坐标
  var mid = (num - 1) / 2;
  // 坐标所在圈数
  var n = Math.min(
    xPos <= mid ? xPos : (num - 1) - xPos,
    yPos <= mid ? yPos : (num - 1) - yPos,
  );
  // 第 n 圈的边长
  var w = num - n * 2;

  // 计算 0 到 n-1 圈共有几个数
  var res = BigInt(0);
  if (n > 0) {
    var round0 = 4 * (num - 1);
    var roundN_1 = 4 * (w + 1);
    res = ((BigInt(round0) + BigInt(roundN_1)) * BigInt(n)) / BigInt(2);
  }

  // 边长去掉最后一格
  var wn = w - 1;
  // 右边界坐标
  var r = (num - 1) - n;
  if (xPos === n && yPos !== r) {
    // 在上边，直接加偏移值
    res = res + BigInt(yPos - n);
  } else if (yPos === r && xPos !== r) {
    // 在右边，加 1 个边长再加偏移值
    res = res + BigInt(wn) + BigInt(xPos - n);
  } else if (xPos === r && yPos !== n) {
    // 在下边，加 2 个边长再加偏移值
    res = res + BigInt(wn * 2) + BigInt(r - yPos);
  } else if (yPos === n && xPos !== n) {
    // 在左边，加 3 个边长再加偏移值
    res = res + BigInt(wn * 3) + BigInt(r - xPos);
  }

  return parseInt(res % BigInt(9)) + 1;
};

module.exports = orchestraLayout;
