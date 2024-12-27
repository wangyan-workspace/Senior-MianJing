/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      // 注意⭐️：从map中取值用get，has是判断有没有这个值
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
  return [];
};
