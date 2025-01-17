/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);

  if (Math.abs(target) > sum) {
    return 0;
  }

  // 如果 (sum + target) 是奇数，那么 (sum + target) / 2 将是一个非整数。
  // 这意味着我们无法找到一个子集使得其和为一个非整数值，因为子集的和只能是整数。
  if ((sum + target) % 2 === 1) {
    return 0;
  }

  let halfSum = (sum + target) / 2;
  let dp = new Array(halfSum + 1).fill(0);
  dp[0] = 1; // 背包容量为0时，子集的个数为1

  for (let i = 0; i < nums.length; i++) {
    for (let j = halfSum; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]]; // 更新dp[j]，表示背包容量为j时，子集的个数,放入该数字的个数 + 不放入该数字的个数
    }
  }

  return dp[halfSum];
};
