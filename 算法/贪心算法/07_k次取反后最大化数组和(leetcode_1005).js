/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a)); // 注意⭐️：降序排列

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  while (k > 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }

  return nums.reduce((a, b) => a + b, 0);
};
