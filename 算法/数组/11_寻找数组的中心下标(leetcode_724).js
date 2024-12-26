/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum + nums[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
};
