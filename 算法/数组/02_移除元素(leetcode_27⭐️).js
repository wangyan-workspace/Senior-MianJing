/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 快慢指针⭐️⭐️⭐️
var removeElement = function (nums, val) {
  let fastIndex = 0;
  let slowIndex = 0;

  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }

  return slowIndex;
};
