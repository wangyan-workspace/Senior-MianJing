/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    return a[0] - b[0];
  });

  let result = 1; // result 的初始值设为 1 是因为我们至少需要一支箭来射击第一个气球。

  for (let i = 1; i < points.length; i++) {
    // 如果当前气球的左边界大于前一个气球的右边界，说明这两个气球没有重叠，需要增加一支箭（result++）。
    if (points[i][0] > points[i - 1][1]) {
      result++;
    } else {
      // 如果当前气球与前一个气球重叠，则可以用同一支箭射击这两个气球，因此不需要增加箭的数量，而是更新当前气球的右边界为两个气球的最小右边界。
      points[i][1] = Math.min(points[i - 1][1], points[i][1]);
    }
  }

  return result;
};
