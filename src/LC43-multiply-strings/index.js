/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var len = num2.length;
  var arr1 = num1.split('').map(n => +n);
  var arr2 = num2.split('').map(n => +n);
  var cache = [[0], arr1.slice().reverse()];
  var res = [0];

  var i = 0;
  var num, prod;
  while (len--) {
    num = arr2[len];
    if (cache[num]) prod = cache[num];
    else prod = cache[num] = arrayATimesBReverse(arr1, num);
    res = reverseAAndReverseBPadC(res, prod, i++);
  }

  return res.reverse().join('');
};

/**
 * a * b
 * 678 * 9 = 6102
 * [6, 7, 8] * 9 = [2, 0, 1, 6]
 */
function arrayATimesBReverse(a, b) {
  var cf = 0;
  var res = a.reduceRight((ans, curr) => {
    var prod = curr * b + cf;
    cf = prod / 10 >> 0;
    ans.push(prod % 10);
    return ans;
  }, []);
  if (cf > 0) res.push(cf);
  return res;
}

/**
 * a + b * (10 ^ c)
 * 678 + 789 * (10 ^ 1) = 8568
 * [8, 7, 6] + [9, 8, 7] * (10 ^ 1)
 * = [8, 7, 6] + [0, 9, 8, 7]
 * = [8, 6, 5, 8];
 */
function reverseAAndReverseBPadC(a, b, c) {
  var len1 = a.length;
  var len2 = b.length;
  var cf = 0;
  var res = [];
  var i = 0;
  var j = -c;
  var sum;
  while (i < len1) {
    sum = a[i++] + (b[j++] || 0) + cf;
    cf = sum >= 10 ? 1 : 0;
    res.push(sum % 10);
  }
  while (j < len2) {
    sum = (b[j++] || 0) + cf;
    cf = sum >= 10 ? 1 : 0;
    res.push(sum % 10);
  }
  if (cf > 0) res.push(cf);
  i = res.length - 1;
  while (i > 0 && res[i--] === 0) res.pop();
  return res;
}

module.exports = multiply;
