/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  var len = customers.length;
  var res = 0;

  var now = 0;
  customers.forEach(([arrivali, time]) => {
    if (now < arrivali) now = arrivali;
    else res += now - arrivali;
    res += time;
    now += time;
  });

  return res / len;
};

module.exports = averageWaitingTime;
