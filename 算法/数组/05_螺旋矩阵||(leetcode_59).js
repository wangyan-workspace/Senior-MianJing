/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = 0;
  let startY = 0;
  let count = 1;
  let loop = Math.floor(n / 2); // 圈数
  let mid = Math.floor(n / 2); // 中间位置
  let offset = 1; // 偏移位数
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX;
    let col = startY;

    // 从左到右
    for (; col < n - offset; col++) {
      res[row][col] = count;
      count++;
    }
    // 从上到下
    for (; row < n - offset; row++) {
      res[row][col] = count;
      count++;
    }
    // 从右到左
    for (; col > startY; col--) {
      res[row][col] = count;
      count++;
    }
    // 从下到上
    for (; row > startX; row--) {
      res[row][col] = count;
      count++;
    }

    startX++;
    startY++;
    offset++;
  }

  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};
