function mergeArray(intervals) {
  const n = intervals.length;
  if (n < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); // 按照区间的左边界进行排序

  let left = intervals[0][0]; // 初始化左边界
  let right = intervals[0][1]; // 初始化右边界
  let res = [];

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] > right) {
      // 如果当前区间的左边界大于右边界，说明没有交集，将之前的区间加入结果数组
      res.push([left, right]);
      left = intervals[i][0]; // 更新左边界
      right = intervals[i][1]; // 更新右边界
    } else {
      right = Math.max(intervals[i][1], right); // 如果有交集，更新右边界为两个区间的最大值
    }
  }

  res.push([left, right]); // 注意⭐️⭐️⭐️：将最后一个区间加入结果数组

  return res;
}

console.log(
  mergeArray([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeArray([
    [1, 4],
    [4, 5],
  ])
);
