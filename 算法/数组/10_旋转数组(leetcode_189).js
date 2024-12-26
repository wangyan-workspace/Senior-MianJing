/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  k %= n;

  const reverse = (nums, i, j) => {
    while (i <= j) {
      // 注意while循环⭐️
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  };

  if (k > 0) {
    // 注意判断k的数值⭐️
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
  }

  return nums;
};
