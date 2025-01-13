/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = 1; //  result 初始化为 1，表示至少需要保留一个区间。因为在最坏的情况下，至少会有一个区间是可以保留的

  for (let i = 1; i < intervals.length; i++) {
    // 如果当前区间的起始位置 intervals[i][0] 大于等于前一个区间的结束位置 intervals[i - 1][1]，说明这两个区间不重叠，可以保留当前区间，因此 result++
    if (intervals[i][0] >= intervals[i - 1][1]) {
      result++;
    } else {
      // 如果当前区间与前一个区间重叠，则更新当前区间的结束位置为两个区间结束位置的最小值。这是为了尽量减少重叠，保留更早结束的区间。
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }

  return intervals.length - result;
};
