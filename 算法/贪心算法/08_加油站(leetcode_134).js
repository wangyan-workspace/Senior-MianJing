/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let curRest = 0;
  let totalRest = 0;

  for (let i = 0; i < gas.length; i++) {
    curRest += gas[i] - cost[i];
    totalRest += gas[i] - cost[i];

    if (curRest < 0) {
      curRest = 0;
      start = i + 1;
    }
  }

  if (totalRest < 0) return -1;
  return start;
};
