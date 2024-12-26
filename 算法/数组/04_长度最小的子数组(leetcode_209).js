/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let n = nums.length;
  let sum = 0;
  let res = Infinity;

  while (end < n) {
    sum += nums[end];

    while (sum >= target) {
      res = Math.min(res, end - start + 1);
      sum -= nums[start];
      start++;
    }

    end++;
  }

  // 注意⭐️：这里需要再次判断res的值，如果没有满足条件的，即res仍为Infinity，需要返回0，否则返回最新的res值
  return res === Infinity ? 0 : res;
};
