/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 一维数组的01背包
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;
  let dp = new Array(sum / 2 + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);

      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }

  return dp[sum / 2] === sum / 2;
};
