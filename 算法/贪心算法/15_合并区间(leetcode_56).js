/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let n = intervals.length;
  if (n < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let left = intervals[0][0];
  let right = intervals[0][1];

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] > right) {
      result.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    } else {
      right = Math.max(right, intervals[i][1]);
    }
  }

  result.push([left, right]); //注意⭐️：将最后一个区间加入结果数组

  return result;
};
