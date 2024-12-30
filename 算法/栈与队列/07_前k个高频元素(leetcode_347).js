/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let countMap = new Map();
  const n = nums.length;

  for (i = 0; i < n; i++) {
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1);
  }

  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0]);
};
