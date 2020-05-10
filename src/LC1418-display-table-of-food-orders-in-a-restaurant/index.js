/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  var length = orders.length;
  if (length === 0) return;

  var result = [['']];
  var tablesMap = {};
  var itemMap = {};
  var headerMap = result[0];

  while (length--) {
    var order = orders[length];
    var tableId = order[1];
    var item = order[2];

    var tab = tablesMap[tableId];
    if (!tab) tab = tablesMap[tableId] = [];
    var itemId = itemMap[item];
    if (!itemId) {
      itemId = itemMap[item] = headerMap.length;
      headerMap.push(item);
    }
    if (!tab[itemId]) tab[itemId] = 0;
    tab[itemId]++;
  }

  headerMap.sort();
  for (var i in tablesMap) {
    var j = headerMap.length;
    var t = tablesMap[i];
    if (!t) continue;
    var row = [];
    while (--j) {
      var k = itemMap[headerMap[j]];
      row[j] = (t[k] || 0) + '';
    }
    row[0] = i + '';
    result.push(row);
  }
  result[0][0] = 'Table';

  return result;
};

module.exports = displayTable;
