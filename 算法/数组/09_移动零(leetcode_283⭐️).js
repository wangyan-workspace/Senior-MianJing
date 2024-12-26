/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针⭐️⭐️⭐️
var moveZeroes = function (nums) {
  let n = nums.length;
  let fastIndex = 0;
  let slowIndex = 0;

  while (fastIndex < n) {
    if (nums[fastIndex] !== 0) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }

  while (slowIndex < n) {
    nums[slowIndex] = 0;
    slowIndex++;
  }

  return nums;
};
